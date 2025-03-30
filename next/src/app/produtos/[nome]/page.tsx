import { db } from '@/db'
import Produto from './produto'

export interface PageProps {
  params: {
    slug: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { slug } = params

  const product = await db.product.findFirst({
    where: { slug: slug },
    include: {
      category: true,
      images: true,
      applications: true,
      specifications: {
        include: {
          specificationField: true,
        },
      },
      characteristics: true,
    },
  })

  if (!product) {
    return <p className="text-center text-xl">Produto não encontrado</p>
  }

  return <>{product && <Produto product={product} />}</>
}

export default Page
