import { db } from '@/lib/prisma'
import ProductsByCategory from './ProductsByCategory'
import { capitalizeString } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { productIncludes } from '@/shared/types/prisma-types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const categories = await db.category.findMany({
    select: {
      name: true, // A propriedade `name` é o que você usará para o `categoryName`
    },
    where: {
      name: {
        not: '', // Filtra categorias com nome vazio
      },
    },
  })

  // Mapeia as categorias para os parâmetros que o Next.js espera
  return categories.map((category) => ({
    categoryName: category.name, // `categoryName` é o parâmetro da URL
  }))
}

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
    notFound()
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
