import { getCategories } from '@/data/dal/categories/get-categories'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { getProducts } from '@/data/dal/products/get-products'

export interface ProductsListProps {}

export const ProductsList = async (props: ProductsListProps) => {
  const categories = await getCategories()
  const products = await getProducts()

  // Filter parent and child categories
  const parentCategories = categories.filter((category) => !category.parentId)
  const childCategories = categories.filter((category) => category.parentId)

  // Group products by category
  const getProductsByCategory = (categoryId: number) => {
    return products.filter((product) => product.categoryId === categoryId)
  }

  return (
    <div>
      {parentCategories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id)
        const categoryChildren = childCategories.filter(
          (child) => child.parentId === category.id,
        )

        return (
          <div className="mb-6" key={category.id}>
            <Link href={`categorias/${encodeURIComponent(category.name)}`}>
              <h2 className="mb-4 text-3xl font-black uppercase">
                {category.name}
              </h2>
            </Link>

            {categoryProducts.length > 0 || categoryChildren.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}

                {/* Exibir produtos das categorias filhas, se existirem */}
                {categoryChildren.map((childCategory) => {
                  const childProducts = getProductsByCategory(childCategory.id)
                  return (
                    <div key={childCategory.id}>
                      {childProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )
                })}
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
