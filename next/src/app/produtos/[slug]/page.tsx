import { db } from '@/lib/prisma'
import Produto from './produto'
import { productIncludes } from '@/shared/types/prisma-types'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  try {
    const products = await db.product.findMany({
      select: {
        slug: true,
      },
      where: {
        slug: {
          not: '',
        },
      },
    })

    return products.map((product) => ({
      slug: product.slug,
    }))
  } catch (error) {
    console.error('Erro ao gerar static params:', error)
    return [] // evita crash no build da Vercel
  }
}

export interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  try {
    const { slug } = params

    const product = await db.product.findFirst({
      where: { slug },
      include: productIncludes,
    })

    if (!product) {
      return notFound()
    }

    return <Produto product={product} />
  } catch (error) {
    console.error('Erro ao carregar produto:', error)
    return notFound()
  }
}

export default Page
