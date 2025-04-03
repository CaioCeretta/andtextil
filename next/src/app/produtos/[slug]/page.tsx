import { db } from '@/db'
import Produto from './produto'
import { productIncludes } from '@/shared/types'

export interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const product = await db.product.findFirst({
    where: { slug: slug },
    include: productIncludes,
  })

  if (!product) {
    return <p className="text-center text-xl">Produto não encontrado</p>
  }

  return <>{product && <Produto />}</>
}

export default Page
