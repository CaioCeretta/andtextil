import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import HomeCategories from './home-categories'
import type { CategoryType, ProductType } from '@/shared/types'
import { getCategories } from '@/data/dal/categories/get-categories'
import { getProducts } from '@/data/dal/products/get-products'

export default async function Home() {
  const categories = await getCategories()
  const products = await getProducts()

  return (
    <div className="">
      <section>
        <MaxWidthWrapper className="flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="mb-5 text-4xl font-bold text-blue-text">Produtos</h1>
            <div className="flex-1">
              <HomeCategories categories={categories} products={products} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}
