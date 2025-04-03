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

  return (
    <div className="items-center justify-center p-4 transition">
      <Card className="w-full max-w-xs rounded-xl border">
        <div className="grid gap-4 p-4">
          <div className="relative aspect-square h-72 overflow-hidden rounded-xl">
            <Image
              src={product.images?.[0]?.url ?? '/placeholder.jpeg'}
              alt={product.name}
              className="mb-3 aspect-square h-full rounded-md"
              fill
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
      </Card>
    </div>
  )
}
