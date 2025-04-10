'use client'

import CategoryCard from '@/components/Categorias/category-card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductsList from '@/components/Product/ProductList'
import useCategories from '@/data/hooks/useCategories'
import useProducts from '@/data/hooks/useProducts'
import { useCallback, useEffect } from 'react'

export default function Categories() {
  const { categories, emptyCategorySelected } = useCategories()
  const { products } = useProducts()

  useEffect(() => emptyCategorySelected(), [emptyCategorySelected])

  const getFirstProductByCategory = useCallback(
    (categoryId: number) => {
      return products.find((product) => categoryId === product.categoryId)
    },
    [products],
  )

  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-2 sm:pb-32 lg:pb-52 lg:pt-8 xl:gap-x-8 xl:pt-6">
        <ProductsList />
      </MaxWidthWrapper>
    </section>
  )
}
