import { formatProductName } from '@/lib/utils'
import type { Product } from '@/shared/interfaces'
import OrcamentoModal from '../OrcamentoModal'
import { Button } from '../ui/button'
import * as Dialog from '../ui/dialog'

export interface OrcamentoDialogProps {
	product: Product
}

export default function OrcamentoDialog(
	props: OrcamentoDialogProps
) {
	const { product } = props

	return (
		<Dialog.Dialog>
			<Dialog.DialogTrigger asChild>
				<Button
					size="lg"
					type="button"
					className="bg-yellow-500 hover:bg-yellow-600 text-white
								font-medium w-[50%] flex mx-auto justify-center"
				>
					Solicitar Orçamento
				</Button>
			</Dialog.DialogTrigger>
			<OrcamentoModal
				product={{
					name: formatProductName(product.name),
				}}
			/>
		</Dialog.Dialog>
	)
}
