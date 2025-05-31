# Amazon Simple Email Service (SES) Integration Guide

## Overview

Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application. This guide explains how to set up and use Amazon SES in the Synerga Apexion project.

## Prerequisites

- An AWS account
- Access to Amazon SES console
- A verified email address or domain in SES
- Appropriate AWS credentials (Access Key ID and Secret Access Key)

## Setup Steps

### 1. AWS Console Configuration

1. Log in to the AWS Management Console
2. Navigate to Amazon SES
3. Choose a region (preferably closest to your application's users)
4. Verify your domain or email address:
   - For testing: Verify individual email addresses
   - For production: Verify your entire domain

### 2. Create AWS Credentials

1. Go to IAM in AWS Console
2. Create a new user or use existing one
3. Attach the `AmazonSESFullAccess` policy
4. Generate Access Key ID and Secret Access Key
5. Save these credentials securely

### 3. Environment Variables

Add these variables to your `.env.local` file:

```bash
# Email Service Selection
EMAIL_SERVICE=ses

# AWS SES Configuration
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_SES_FROM_EMAIL=your-verified-email
```

### 4. Usage in Code

The email service can be used through our email configuration utility:

```typescript
import { createTransporter } from "@/utils/email-config";

// Create email transporter
const transporter = createTransporter();

// Send email
await transporter.sendMail({
	from: process.env.AWS_SES_FROM_EMAIL,
	to: "recipient@example.com",
	subject: "Test Email",
	text: "This is a test email",
	html: "<p>This is a test email</p>",
});
```

## Testing

To test your SES configuration:

1. Import and use the test function:

```typescript
import { testEmailConfiguration } from "@/utils/email-test";

await testEmailConfiguration("test@example.com");
```

## Production Considerations

1. **Sandbox Mode**:

   - New SES accounts start in sandbox mode
   - Can only send to verified email addresses
   - Request production access for sending to any recipient

2. **Sending Limits**:

   - Monitor your sending quotas
   - Implement rate limiting for high-volume sending
   - Use SES dashboard to track bounces and complaints

3. **Best Practices**:
   - Implement bounce and complaint handling
   - Monitor sending statistics
   - Keep your domain's reputation healthy
   - Use configuration sets for tracking

## Troubleshooting

Common issues and solutions:

1. **Email not sending**:

   - Verify credentials are correct
   - Check if email/domain is verified
   - Ensure you're not in sandbox mode for production use

2. **Authentication errors**:

   - Double-check AWS credentials
   - Verify region settings
   - Ensure IAM permissions are correct

3. **Bounces**:
   - Verify recipient email addresses
   - Check if you're in sandbox mode
   - Monitor bounce rates

## Switching Email Services

The application supports multiple email services. To switch between them:

1. Update the `EMAIL_SERVICE` environment variable:

   - `ses` for Amazon SES
   - `smtp` for SMTP
   - `nodemailer` for Gmail/Nodemailer

2. Ensure the corresponding service's environment variables are set

## Support and Resources

- [AWS SES Documentation](https://docs.aws.amazon.com/ses/)
- [AWS SDK Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [Nodemailer Documentation](https://nodemailer.com/)
