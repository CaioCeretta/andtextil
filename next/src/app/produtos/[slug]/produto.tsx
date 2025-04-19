'use client'

import { useState } from 'react'

import type { ProductType } from '@/shared/types'
import Image from 'next/image'
import OrcamentoDialog from '../components/OrcamentoDialog'
import ProductDescription from '../components/ProductDescription'
import ProductTable from './Tabela/ProductTable'

interface ProdutoProps {
  product: ProductType
}

const Produto = ({ product }: ProdutoProps) => {
  const [categoryName, setCategoryName] = useState<string>(
    product.category.name,
  )

  if (!product) {
    return <div>Carregando Detalhes...</div>
  }

  return (
    <div className="mx-auto w-full pb-5 lg:max-w-full">
      <h1 className="my-4 hidden text-center text-2xl font-bold">
        {categoryName}
      </h1>
      <div className="mx-3 my-3 mt-2 grid grid-cols-1 text-[14px] lg:grid-cols-2 lg:items-center">
        <div className="order-2 mx-auto flex w-full max-w-[20rem] flex-1 flex-col lg:order-1 lg:max-w-[30rem] xl:max-w-[40rem]">
          <div>
            <ProductDescription product={product} />

            {/* Especificações */}
            <div className="flex flex-col items-center md:block">
              <h2 className="mb-4 mt-6 text-xl font-bold">Especificações:</h2>
              <div>
                <ProductTable product={product} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <OrcamentoDialog product={product} />
          </div>
        </div>
        <div className="order-1 mx-auto mb-5 aspect-square max-h-[40rem] overflow-hidden rounded-2xl shadow-md lg:order-2 lg:max-h-[50rem] lg:w-[90%]">
          <Image
            className="h-full w-full bg-cover bg-center object-contain duration-500"
            src={product.images[0].url}
            alt={product.name}
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  )
}

export default Produto
