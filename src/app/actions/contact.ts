'use server'

import nodemailer from 'nodemailer'

export interface FormState {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    }
  }

  // Check if SMTP is configured
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = process.env.SMTP_PORT
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'sales@privtech.net'

  // If SMTP is not configured, log the submission (development mode)
  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log('=== Contact Form Submission ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Company:', company || 'Not provided')
    console.log('Phone:', phone || 'Not provided')
    console.log('Service:', service || 'Not specified')
    console.log('Message:', message)
    console.log('================================')

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
    }
  }

  try {
    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587'),
      secure: smtpPort === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Privtech Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission${service ? ` - ${service}` : ''}`,
      text: `
New contact form submission from the Privtech website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service Interested In: ${service || 'Not specified'}

Message:
${message}

---
This email was sent from the contact form on privtech.net
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2f8f63; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2f8f63; }
    .message { background: white; padding: 15px; border-left: 4px solid #2f8f63; margin-top: 20px; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> ${name}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      <div class="field">
        <span class="label">Company:</span> ${company || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Phone:</span> ${phone || 'Not provided'}
      </div>
      <div class="field">
        <span class="label">Service:</span> ${service || 'Not specified'}
      </div>
      <div class="message">
        <span class="label">Message:</span>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>
    <div class="footer">
      Sent from the contact form on privtech.net
    </div>
  </div>
</body>
</html>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      success: false,
      message: 'There was an error sending your message. Please try again or contact us directly at sales@privtech.net.',
    }
  }
}
