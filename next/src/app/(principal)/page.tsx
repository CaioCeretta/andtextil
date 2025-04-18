import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import HomeCategories from './home-categories'
import type { CategoryType, ProductType } from '@/shared/types'

async function getCategories(): Promise<CategoryType[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`,
    {
      next: { revalidate: 60 },
    },
  )

  return res.json()
}

async function getProducts(): Promise<ProductType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
    next: { revalidate: 60 },
  })

  return res.json()
}

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
