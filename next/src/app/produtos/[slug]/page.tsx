import { db } from '@/lib/prisma'
import Produto from './produto'
import { productIncludes } from '@/shared/types/prisma-types'
import { notFound } from 'next/navigation'

export interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const product = await db.product.findFirst({
    where: { slug },
    include: productIncludes,
  })

  if (!product) {
    notFound()
  }

  return <Produto product={product} />
}

export async function generateStaticParams() {
  const products = await db.product.findMany({
    select: {
      slug: true,
    },
    where: {
      slug: {
        not: '', // Apenas `slugs` válidos
        // Poderia também ser: slug: { not: "" }, se quiser garantir que não seja vazio
      },
    },
  })

  return products.map((product) => ({
    slug: product.slug, // Aqui, você confia que o valor de slug é sempre válido
  }))
}

export default Page
