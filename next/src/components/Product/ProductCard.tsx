import type { ProductType } from '@/shared/interfaces'
import Image from 'next/image'
import ButtonShadcn from '../ButtonShadcn2'
import Link from 'next/link'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: ProductType
}

export default function ProductCard(props: ProductCardProps) {
  const router = useRouter()

  const { product } = props

  const isTallImage = (product: ProductType) => {
    const width = product.images?.[0]?.width
    const height = product.images?.[0]?.height
    return height > width // Se a imagem for mais alta que larga
  }

  return (
    <div className="flex w-[90%] flex-col items-center gap-3 rounded-md border p-4 shadow-sm hover:shadow-md">
      <div className="relative aspect-square max-h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={product.images?.[0]?.url ?? '/placeholder.jpeg'}
          alt={product.name}
          fill
          className="rounded-md"
        />
      </div>

      <div className="">
        <h3 className="text-sm font-semibold text-blue-text md:text-base">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground md:text-base">
          {product.description}
        </p>
      </div>

      <Button
        onClick={() => router.push(`/produtos/${product.slug}`)}
        size="sm"
        variant="default"
        className="cursor-pointer bg-main-yellow"
      >
        Ver mais
      </Button>
    </div>
  )
}
