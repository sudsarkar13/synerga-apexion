import nodemailer from "nodemailer";

// Email service types
export type EmailService = "smtp" | "nodemailer";

// Service configurations
interface EmailConfig {
	service: EmailService;
	config: nodemailer.TransportOptions | nodemailer.SentMessageInfo;
}

// Define configurations for each service
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
		} as nodemailer.TransportOptions,
	},
	nodemailer: {
		service: "nodemailer",
		config: {
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		} as nodemailer.TransportOptions,
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

// Get the current active email service from environment variable
export const getCurrentEmailService = (): EmailService => {
	return (process.env.EMAIL_SERVICE as EmailService) || "nodemailer";
};

// Create transporter based on service type
export const createTransporter = () => {
	const service = getCurrentEmailService();
	const config = emailConfigs[service];
	return nodemailer.createTransport(config.config);
};
