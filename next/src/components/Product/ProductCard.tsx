import type { ProductType } from '@/shared/interfaces'
import Image from 'next/image'
import ButtonShadcn from '../ButtonShadcn2'
import Link from 'next/link'

interface ProductCardProps {
  product: ProductType
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props

  return (
    <div className="flex w-[90%] flex-col items-center gap-3 rounded-md border p-4 shadow-sm transition hover:shadow-md">
      <div className="flex h-full max-h-72 w-full flex-1 justify-center rounded">
        <Image
          src={product.images[0].url}
          alt={product.name}
          className="mb-3 h-full rounded-md"
          fill
        />

        <div className="flex flex-col">
          <h3 className="mb-2 text-lg font-medium">{product.name}</h3>

          <ButtonShadcn>
            <Link href={`products/${product.slug}`}>Ver mais</Link>
          </ButtonShadcn>
        </div>
      </div>
    </div>
  )
}
