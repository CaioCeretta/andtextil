// pages/api/send-email.js

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface EmailRequestBody {
  name: string
  email: string
  text: string
}

export default async function handler(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const body = (await req.json()) as EmailRequestBody
      const { name, email, text } = body

      // Set up the transporter
      const transporter = nodemailer.createTransport({
        service: 'smtp.kinghost.net', // You can use other services here
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or an app password
        },
      })

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Orçamento para ${name}: ${email}`, // Use description as the subject
        text,
      }

      await transporter.sendMail(mailOptions)
      return NextResponse.json({ message: 'Email sent successfully!' })
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 },
      )
    }
  } else {
    return NextResponse.json(
      { error: `Method ${req.method} Not Allowed` },
      { status: 405 },
    )
  }
}
