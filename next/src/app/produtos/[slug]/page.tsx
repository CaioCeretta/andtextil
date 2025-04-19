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

export default Page
