// app/api/contact/route.ts (Next.js App Router - API route)
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()
  const { name, email, body } = data

  try {
    const data = await resend.emails.send({
      from: 'Contato <contato@andtextil.com.br>', // domínio verificado!
      to: 'comercial@andtextil.com.br',
      subject: 'Novo contato do site',
      replyTo: email,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br>${body}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail' },
      { status: 500 },
    )
  }
}
