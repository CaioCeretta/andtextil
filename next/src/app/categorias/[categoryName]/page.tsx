import { db } from '@/db'
import ProductsByCategory from './ProductsByCategory'
import { capitalizeString } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

interface PageProps {
  params: {
    categoryName: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { categoryName } = params

  const category = await db.categories.findUnique({
    where: {
      name: categoryName,
    },
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
  })

  if (!category) {
    throw new Error(`Categoria com nome ${categoryName} não foi encontrada`)
  }

  console.log(category)

  return (
    <MaxWidthWrapper className="mt-10">
      <h1 className="mb-3 font-semibold text-2xl text-blue-text">
        {capitalizeString(categoryName)}
      </h1>
      <div className="flex gap-5">
        <ProductsByCategory products={category.products} />
      </div>
    </MaxWidthWrapper>
  )
}

export default Page
