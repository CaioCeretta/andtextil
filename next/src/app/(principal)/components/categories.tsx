'use client'

import CategoryCard from '@/components/Categorias/category-card'
import useCategories from '@/data/hooks/useCategories'
import useProducts from '@/data/hooks/useProducts'
import { useCallback, useEffect } from 'react'

export interface HomeCategoriesProps {}

export const HomeCategories = (props: HomeCategoriesProps) => {
  const { getParentCategories, emptyCategorySelected } = useCategories()
  const { products } = useProducts()

  const parentCategories = getParentCategories()

  useEffect(() => emptyCategorySelected(), [emptyCategorySelected])

  const getFirstProductByCategory = useCallback(
    (categoryId: number) => {
      return products.find((product) => categoryId === product.categoryId)
    },
    [products],
  )

  return (
    <div className="mb-10 grid grid-cols-1 items-center justify-between gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {parentCategories.map((category) => {
        const product = getFirstProductByCategory(category.id)

        return (
          <div
            key={category.id}
            className="flex h-full max-w-full flex-col items-center justify-center rounded-lg border border-yellow-950 p-6 sm:p-8 md:p-10"
          >
            {product ? (
              <div className="h-[15rem] w-full flex-1 sm:w-[80%]">
                <CategoryCard category={category} product={product} />
              </div>
            ) : (
              <p className="text-center text-gray-500">
                Não há produtos para esta categoria
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default HomeCategories
