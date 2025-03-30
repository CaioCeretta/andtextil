'use client'

import useCategories from '@/data/hooks/useCategories'
import useProducts from '@/data/hooks/useProducts'
import ProductCard from './ProductCard'
import Link from 'next/link'

export interface ProductsListProps {}

export const ProductsList = (props: ProductsListProps) => {
  const { categories } = useCategories()
  const { products } = useProducts()

  const getProductsByCategory = (categoryId: number) => {
    return products.filter((product) => product.categoryId === categoryId)
  }

  return (
    <div>
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id)

        console.log(categoryProducts)

        return (
          <div className="mb-6" key={category.id}>
            <Link href={`categorias/${category.name}`}>
              <h2 className="mb-4 text-3xl font-black uppercase">
                {category.name}
              </h2>
            </Link>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Nenhum produto está disponível</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList
