'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import * as z from 'zod'

const contatoFormSchema = z.object({
	nome: z.string(),
	body: z.string(),
	assunto: z.string(),
	email: z.string().email(),
})

type ContatoFormInputs = z.infer<typeof contatoFormSchema>

export const Contato = () => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm<ContatoFormInputs>({
		resolver: zodResolver(contatoFormSchema),
	})

	async function handleEnviarOrcamento(
		data: ContatoFormInputs
	) {
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
		<MaxWidthWrapper className="w-[70%]">
			<div className="flex flex-col gap-5 px-20 w-full  items-center">
				<h1 className="font-black text-3xl text-zinc-950 mb-10 text-center">
					Formulário para Contato
				</h1>

				<form
					onSubmit={handleSubmit(handleEnviarOrcamento)}
					action="https://formsubmit.co/financeiro@andtextil.com.br"
					method="POST"
					className="flex flex-col gap-3 w-full max-w-[700px]" // max-width para controlar o tamanho
				>
					<Input
						type="text"
						className="p-6 w-full placeholder:text-sm md:placeholder:text-md lg:placeholder:text-md"
						{...register('nome')}
						placeholder="Nome para Contato"
					/>
					<Input
						type="text"
						placeholder="Assunto"
						className="p-6 w-full placeholder:text-sm md:placeholder:text-md lg:placeholder:text-md"
						{...register('assunto')}
					/>
					<Input
						type="text"
						className="p-6 w-full placeholder:text-sm md:placeholder:text-md lg:placeholder:text-md"
						{...register('email')}
						placeholder="E-mail do orçamento"
					/>
					<Textarea
						placeholder="Escreva sua mensagem..."
						className="p-6 w-full placeholder:text-sm md:placeholder:text-md lg:placeholder:text-md"
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
			</div>
		</MaxWidthWrapper>
	)
}

export default Contato
