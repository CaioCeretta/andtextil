import CategoryCard from '@/components/Categorias/category-card'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductsList from '@/components/Product/ProductList'
import { getCategories } from '@/data/dal/categories/get-categories'
import { getProducts } from '@/data/dal/products/get-products'

export default async function Categories() {
  const { products } = await getProducts()
  const { categories } = await getCategories()

  const getFirstProductByCategory = (categoryId: number) => {
    return products.find((product) => categoryId === product.categoryId)
  }

  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-2 sm:pb-32 lg:pb-52 lg:pt-8 xl:gap-x-8 xl:pt-6">
        <ProductsList />
      </MaxWidthWrapper>
    </section>
  )
}
