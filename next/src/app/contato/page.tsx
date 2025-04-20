'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

import { useForm } from 'react-hook-form'
import * as z from 'zod'

const contatoFormSchema = z.object({
  name: z.string(),
  body: z.string(),
  assunto: z.string(),
  email: z.string().email(),
})

type ContatoFormInputs = z.infer<typeof contatoFormSchema>

export default function Contato() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ContatoFormInputs>({
    resolver: zodResolver(contatoFormSchema),
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleEnviarOrcamento(data: ContatoFormInputs) {
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          body: data.body,
        }),
      })

      if (response.ok) {
        alert('E-mail enviado com sucesso')
      } else {
        alert('Falha ao enviar o e-mail.')
      }
    } catch (error) {
      console.log('Erro ao enviar o email: ', error)
      alert('Erro inesperado')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MaxWidthWrapper className="sm: w-[100%]">
      <div className="flex w-full flex-col items-center gap-5 px-20">
        <h1 className="mb-10 text-center text-3xl font-black text-zinc-950">
          Formulário para Contato
        </h1>

        <form
          onSubmit={handleSubmit(handleEnviarOrcamento)}
          method="POST"
          className="flex w-[25rem] flex-col gap-3 lg:w-full" // max-width para controlar o tamanho
        >
          <Input
            type="text"
            className="md:placeholder:text-md lg:placeholder:text-md w-full p-6 placeholder:text-sm"
            {...register('name')}
            placeholder="Nome para Contato"
          />
          <Input
            type="text"
            placeholder="Assunto"
            className="md:placeholder:text-md lg:placeholder:text-md w-full p-6 placeholder:text-sm"
            {...register('assunto')}
          />
          <Input
            type="text"
            className="md:placeholder:text-md lg:placeholder:text-md w-full p-6 placeholder:text-sm"
            {...register('email')}
            placeholder="E-mail para contato"
          />
          <Textarea
            placeholder="Escreva sua mensagem..."
            className="md:placeholder:text-md lg:placeholder:text-md w-full p-6 placeholder:text-sm"
            rows={4}
            cols={30}
            {...register('body')}
          />
          <Button
            type="submit"
            className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600"
            disabled={isSubmitting}
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </MaxWidthWrapper>
  )
}
