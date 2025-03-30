import ImageSlider from '@/components/ImagesSlider'
import OrcamentoModal from '@/components/OrcamentoModal/page'
import { Button } from '@/components/ui/button'
import * as Dialog from '@/components/ui/dialog'

import { formatProductName } from '@/lib/utils'
import type { CategoryType, ProductType } from '@/shared/interfaces'
import { Image as ImageType, Product } from '@prisma/client'
import Image from 'next/image'

type ProdutoProps = {
  product: ProductType
}

export const Produto = ({ product }: ProdutoProps) => {
  console.log(product)

  const productName = formatProductName(product.name)

  return (
    <div className="mb-10 max-w-[1480]">
      <div className="group relative m-auto h-[780px] w-full max-w-[1440] px-8 py-16">
        {product.images.length > 0 && (
          <Image src={product.images[0].url} alt={product.name} />
        )}
        <span className="text-md absolute bottom-3 mt-1 block font-medium text-yellow-800">
          {formatProductName(product.category.name)}
        </span>
      </div>
      <div className="mt-2 flex flex-col items-center">
        <h1 className="mb-5 text-4xl font-bold text-blue-text">
          {productName}
        </h1>
        <Dialog.Dialog>
          <Dialog.DialogTrigger asChild>
            <Button
              size={'lg'}
              type="button"
              className="mx-auto flex w-[50%] justify-center bg-yellow-500 font-medium text-white hover:bg-yellow-600"
            >
              Solicitar Orçamento
            </Button>
          </Dialog.DialogTrigger>
          <OrcamentoModal />
        </Dialog.Dialog>
      </div>
    </div>
  )
}

export default Produto
