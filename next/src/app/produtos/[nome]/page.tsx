import { db } from '@/db'
import Produto from './produto'

export interface PageProps {
  params: {
    nome: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { nome } = params

  const product = await db.product.findFirst({
    where: { name: nome },
    include: {
      category: true,
      images: true,
    },
  })

  if (!product) {
    throw new Error('Produto não encontrado')
  }

  return <>{product && <Produto product={product} />}</>
}

export default Page
