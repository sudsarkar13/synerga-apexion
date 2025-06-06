import { createTransporter } from "./email-config";

export async function testEmailConfiguration(toEmail: string) {
	try {
		const transporter = createTransporter();

		// Test email content
		const mailOptions = {
			from: process.env.AWS_SES_FROM_EMAIL || process.env.EMAIL_FROM,
			to: toEmail,
			subject: "Test Email from Synerga Apexion",
			text: "This is a test email to verify your email service configuration.",
			html: `
                <h1>Test Email</h1>
                <p>This is a test email to verify your email service configuration.</p>
                <p>If you received this email, your email service is configured correctly.</p>
            `,
		};

		// Send test email
		const info = await transporter.sendMail(mailOptions);
		console.log("Test email sent successfully:", info);
		return { success: true, messageId: info.messageId };
	} catch (error) {
		console.error("Failed to send test email:", error);
		return { success: false, error };
	}
}
