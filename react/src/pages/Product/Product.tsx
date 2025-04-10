import type { Product } from '@/shared/interfaces'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import OrcamentoDialog from '@/components/Product/OrcamentoDialog'
import ProductDescription from '@/components/Product/ProductDescription'
import ProductTable from '@/components/Product/Tabela/ProductTable'
import productsJSON from '../../data/db/products.json'

interface Category {
  id: number
  name: string
}

const Produto: React.FC = () => {
  const { productSlug } = useParams<{
    productSlug: string
  }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [categoryName, setCategoryName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      const products = productsJSON.products
      const categories = productsJSON.categories

      const productData = products.find(
        (prod: Product) => prod.slug === productSlug,
      )

      if (productData) {
        setProduct(productData)
        const category = categories.find(
          (cat: Category) => cat.id === productData.categoryId,
        )
        setCategoryName(category ? category.name : 'Categoria não encontrada')
      }
      setProduct(productData || null)

      if (productData) {
        const category = categories.find(
          (cat: Category) => cat.id === productData.categoryId,
        )
        setCategoryName(category ? category.name : 'Unknown Category')
      }
      setIsLoading(false)
    }

    fetchProduct()
  }, [productSlug])

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="mx-auto w-full pb-5 lg:max-w-full">
      <h1 className="my-4 hidden text-center text-2xl font-bold">
        {categoryName}
      </h1>
      <div
        className="mx-3 my-3 mt-2 grid grid-cols-1
				text-[14px] lg:grid-cols-2 lg:items-center"
      >
        <div
          className="order-2 mx-auto flex w-full max-w-[20rem] flex-1
				flex-col lg:order-1 lg:max-w-[30rem] xl:max-w-[40rem]"
        >
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
        <div
          className="order-1 mx-auto mb-5 aspect-square max-h-[40rem]
    overflow-hidden rounded-2xl shadow-md lg:order-2 lg:max-h-[50rem] lg:w-[90%]"
        >
          <Image
            className="h-full w-full bg-cover bg-center object-contain duration-500"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
      </div>
    </div>
  )
}

export default Produto
