'use client'

import * as Dialog from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'

import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const novoOrcamentoFormSchema = z.object({
  nome: z.string(),
  body: z.string(),
  email: z.string().email(),
})

type NovoOrcamentoFormInputs = z.infer<typeof novoOrcamentoFormSchema>

export const OrcamentoModal = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<NovoOrcamentoFormInputs>({
    resolver: zodResolver(novoOrcamentoFormSchema),
  })

  async function handleEnviarOrcamento(data: NovoOrcamentoFormInputs) {
    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.nome,
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
    }
  }

  return (
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay />
      <Dialog.DialogContent>
        <Dialog.DialogTitle className="mx-auto text-blue-text">
          Solicitar Orçamento
        </Dialog.DialogTitle>
        <Dialog.DialogClose asChild>
          <div className="absolute bg-transparent b-0 top-[1.5rem] right-[1.5rem] leading-tight cursor-pointer text-gray-500">
            <X size={24} />
          </div>
        </Dialog.DialogClose>
        <form
          onSubmit={handleSubmit(handleEnviarOrcamento)}
          className="flex flex-col gap-3"
        >
          <Input
            type="text"
            {...register('nome')}
            placeholder="Nome para Contato"
          />
          <Input
            type="text"
            {...register('email')}
            placeholder="E-mail do orçamento"
          />
          <Textarea
            placeholder="Informações adicionais para contato"
            rows={4}
            cols={30}
            {...register('body')}
          />

          <Button
            type="submit"
            className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600"
            disabled={isSubmitting}
          >
            Finalizar Pedido
          </Button>
        </form>
      </Dialog.DialogContent>
    </Dialog.DialogPortal>
  )
}

export default OrcamentoModal
