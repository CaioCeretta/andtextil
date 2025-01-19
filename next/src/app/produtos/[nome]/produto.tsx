import ImageSlider from '@/components/ImagesSlider'
import OrcamentoModal from '@/components/OrcamentoModal/page'
import { Button } from '@/components/ui/button'
import * as Dialog from '@/components/ui/dialog'

import { formatProductName } from '@/lib/utils'
import { Categories, Image as ImageType, Product } from '@prisma/client'

type ProdutoProps = {
  product: Product & { images: ImageType[]; category: Categories }
}

export const Produto = ({ product }: ProdutoProps) => {
  console.log(product)

  const productName = formatProductName(product.name)

  return (
    <div className="max-w-[1480]  mb-10">
      <div className="max-w-[1440] w-full h-[780px] m-auto py-16 px-8 relative group">
        <ImageSlider images={product.images} />
        <span className="mt-1 absolute bottom-3 block font-medium text-md text-yellow-800">
          {formatProductName(product.category.name)}
        </span>
      </div>
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-4xl font-bold text-blue-text mb-5">
          {productName}
        </h1>
        <div className="flex-1">
          <p className="mt-1 px-10 text-md leading-loose mb-10 text-yellow-950">
            {product.description}
          </p>
        </div>
        <Dialog.Dialog>
          <Dialog.DialogTrigger asChild>
            <Button
              size={'lg'}
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium w-[50%] flex mx-auto justify-center"
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
