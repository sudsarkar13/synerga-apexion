import nodemailer, { TransportOptions } from "nodemailer";
import { SESv2Client } from "@aws-sdk/client-sesv2";

// Email service types
export type EmailService = "smtp" | "nodemailer" | "ses";

// Service configurations
interface EmailConfig {
	service: EmailService;
	config: TransportOptions;
}

// Initialize SES Client
const sesClient = new SESv2Client({
	region: process.env.AWS_REGION,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
	},
});

const emailConfigs: Record<EmailService, EmailConfig> = {
	smtp: {
		service: "smtp",
		config: {
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: process.env.SMTP_SECURE === "true",
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		} as TransportOptions,
	},
	nodemailer: {
		service: "nodemailer",
		config: {
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		} as TransportOptions,
	},
	ses: {
		service: "ses",
		config: {
			service: "ses",
			auth: {
				credentials: {
					accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
					secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
				},
				region: process.env.AWS_REGION,
			},
			SESClient: sesClient,
			sendingRate: 14, // Optional: Limits the number of messages per second
		} as TransportOptions,
	},
};

// Create SMTP transporter
export const createSMTPTransport = () => {
	return nodemailer.createTransport(emailConfigs.smtp.config);
};

// Create Gmail/Nodemailer transporter
export const createGmailTransport = () => {
	return nodemailer.createTransport(emailConfigs.nodemailer.config);
};

// Create SES transporter
export const createSESTransport = () => {
	return nodemailer.createTransport(emailConfigs.ses.config);
};

// Get the current active email service from environment variable
export const getCurrentEmailService = (): EmailService => {
	return (process.env.EMAIL_SERVICE as EmailService) || "nodemailer";
};

// Create transporter based on service type
export const createTransporter = () => {
	try {
		const service = getCurrentEmailService();
		if (!service) {
			throw new Error("Email service not configured in environment variables");
		}

		const config = emailConfigs[service];
		if (!config) {
			throw new Error(`Invalid email service configuration: ${service}`);
		}

		const transporter = nodemailer.createTransport(config.config);

		// Verify transporter configuration
		transporter.verify((error) => {
			if (error) {
				console.error("Transporter verification failed:", error);
			} else {
				console.log("Transporter is ready to send emails");
			}
		});

		return transporter;
	} catch (error) {
		console.error("Failed to create email transporter:", error);
		throw error;
	}
};
