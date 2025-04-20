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
  })

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default Page
