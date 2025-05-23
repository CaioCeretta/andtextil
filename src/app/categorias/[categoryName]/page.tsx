export const dynamicParams = true
export const revalidate = 60

import { db } from '@/lib/prisma'
import ProductsByCategory from './ProductsByCategory'
import { capitalizeString } from '@/lib/utils'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { productIncludes } from '@/shared/types/prisma-types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try {
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
  } catch (error) {
    console.error('Erro ao gerar static params de categorias:', error)
    return [] // evita crash no build da Vercel
  }
}

interface PageProps {
  params: {
    categoryName: string
  }
}

const Page = async ({ params }: PageProps) => {
  try {
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
      return notFound()
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
        <div className="grid grid-cols-1 gap-5 md:flex">
          <ProductsByCategory products={allProducts} />
        </div>
      </MaxWidthWrapper>
    )
  } catch (error) {
    console.error('Erro ao carregar a categoria:', error)
    return notFound()
  }
}
export default Page
