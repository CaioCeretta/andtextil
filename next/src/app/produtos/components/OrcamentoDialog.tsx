import { formatProductName } from '@/lib/utils'
import type { ProductType } from '@/shared/interfaces'
import OrcamentoModal from '@/components/OrcamentoModal'
import { Button } from '@/components/ui/button'
import * as Dialog from '@/components/ui/dialog'

export interface OrcamentoDialogProps {
  product: ProductType
}

export default function OrcamentoDialog(props: OrcamentoDialogProps) {
  const { product } = props

  return (
    <Dialog.Dialog>
      <Dialog.DialogTrigger asChild>
        <Button
          size="lg"
          type="button"
          className="mx-auto flex w-[50%] justify-center bg-yellow-500 font-medium text-white hover:bg-yellow-600"
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
