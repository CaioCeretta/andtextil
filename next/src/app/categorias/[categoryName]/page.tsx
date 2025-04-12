import { db } from '@/db'
import ProductsByCategory from './ProductsByCategory'
import { capitalizeString } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { productIncludes } from '@/shared/types'

interface PageProps {
  params: {
    categoryName: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { categoryName } = params

  const category = await db.category.findUnique({
    where: {
      name: categoryName,
    },
    include: {
      products: {
        include: productIncludes,
      },
      children: {
        include: {
          products: {
            include: productIncludes,
          },
        },
      },
    },
  })

  if (!category) {
    throw new Error(`Categoria com nome ${categoryName} não foi encontrada`)
  }

  const allProducts = [
    ...category.products,
    ...category.children.flatMap((subcategory) => subcategory.products),
  ]

  return (
    <MaxWidthWrapper className="mt-10">
      <h1 className="mb-3 text-2xl font-semibold text-blue-text">
        {capitalizeString(categoryName)}
      </h1>
      <div className="flex gap-5">
        <ProductsByCategory products={allProducts} />
      </div>
    </MaxWidthWrapper>
  )
}

export default Page
