'use client'

import * as Dialog from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from 'emailjs-com'

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

type Product = {
	product: {
		name: string
	}
}

type NovoOrcamentoFormInputs = z.infer<
	typeof novoOrcamentoFormSchema
>

export const OrcamentoModal = ({ product }: Product) => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm<NovoOrcamentoFormInputs>({
		resolver: zodResolver(novoOrcamentoFormSchema),
	})

	async function handleEnviarOrcamento(
		data: NovoOrcamentoFormInputs
	) {
		try {
			const response = await emailjs.send(
				'service_2rm1pvv',
				'template_bpreoxf',
				{
					from_name: data.nome,
					from_email: data.email,
					message: data.body,
					pnome: product.name,
				},
				'ixdXcZ_Ydymh3Tg2T'
			)

			if (response.status === 200) {
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
			<Dialog.DialogContent className="bg-[#fcf9ed] text-gray-900">
				<Dialog.DialogTitle className="mx-a'uto text-blue-text">
					Solicitar Orçamento
				</Dialog.DialogTitle>
				<Dialog.DialogClose asChild></Dialog.DialogClose>
				<form
					// onSubmit={handleSubmit(handleEnviarOrcamento)}
					onSubmit={handleSubmit(handleEnviarOrcamento)}
					method="POST"
					className="flex flex-col gap-3"
				>
					<input
						type="hidden"
						name="_next"
						value="https://andtextil.com.br/obrigado"
					/>
					<input
						type="hidden"
						name="_subject"
						value={`Contato de orçamento para o produto ${product.name}`}
					/>
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
