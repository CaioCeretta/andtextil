// pages/api/send-email.js

import { NextRequest, NextResponse } from 'next/server'
import { transporter } from '@/lib/mailer'

interface EmailRequestBody {
  name: string
  email: string
}

export async function POST(req: Request) {
  const data = await req.json()

  const { name, email, body } = data

  try {
    await transporter.sendMail({
      from: '"Formulário do Site" <no-reply@andtextil.com.br>', // fictício mas com domínio seu
      to: 'comercial@andtextil.com.br', // destinatário real
      subject: 'Novo contato via site',
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${body}`,
      replyTo: email, // visitante que preencheu o formulário
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Erro ao enviar e-mail' },
      { status: 500 },
    )
  }
}
