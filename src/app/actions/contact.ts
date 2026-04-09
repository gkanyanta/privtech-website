'use server'

import nodemailer from 'nodemailer'

export interface FormState {
  success: boolean
  message: string
}

export async function submitContactForm(formData: FormData): Promise<FormState> {
  // Honeypot spam check - if this hidden field is filled, it's a bot
  const honeypot = formData.get('website') as string
  if (honeypot) {
    // Silently reject but return success to not tip off the bot
    return { success: true, message: 'Thank you for your message. We will get back to you within 24 hours.' }
  }

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

  // SendGrid configuration
  const sendgridApiKey = process.env.SENDGRID_API_KEY
  const senderEmail = process.env.SENDER_EMAIL || 'sales@privtech.net'
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'sales@privtech.net'

  // If SendGrid is not configured, log the submission (development mode)
  if (!sendgridApiKey) {
    console.log('=== Contact Form Submission (No SendGrid API Key) ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Company:', company || 'Not provided')
    console.log('Phone:', phone || 'Not provided')
    console.log('Service:', service || 'Not specified')
    console.log('Message:', message)
    console.log('=====================================================')

    return {
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
    }
  }

  try {
    // Create transporter with SendGrid SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: 'apikey', // This is literally the string "apikey"
        pass: sendgridApiKey, // Your SendGrid API key
      },
    })

    // Email content
    const mailOptions = {
      from: {
        name: 'Privtech Website',
        address: senderEmail, // Must be verified sender in SendGrid
      },
      to: recipientEmail,
      replyTo: email, // Reply goes to the person who submitted the form
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
    .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { padding: 20px; background: #f9f9f9; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2563eb; }
    .message { background: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 20px; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; background: #f9f9f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
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

    // Log more details for debugging
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
    }

    return {
      success: false,
      message: 'There was an error sending your message. Please try again or contact us directly at sales@privtech.net.',
    }
  }
}
