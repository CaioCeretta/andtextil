'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ProductType } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ProductsByCategoryProps = {
  products: ProductType[]
}

const ProductsByCategory = ({ products }: ProductsByCategoryProps) => {
  const router = useRouter()

  return (
    <>
      {products.map((product) => {
        const productImage = product.images[0]?.url || ''

        return (
          <div key={product.id}>
            <div className="">
              <Card className="w-full max-w-xs rounded-xl border">
                <div className="flex flex-col items-center gap-4 p-4">
                  <div className="relative aspect-square min-h-72 w-full max-w-64 overflow-hidden rounded-xl">
                    <Image
                      src={productImage ?? '/placeholder.jpeg'}
                      alt={product.name}
                      style={{
                        objectPosition: '50% 25%',
                        backgroundSize: '50%',
                      }}
                      fill
                      className="rounded-md object-cover"
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

                  <Link href={`/produtos/${product.slug}`}>
                    <Button
                      size="sm"
                      variant="default"
                      className="cursor-pointer bg-secondary-yellow"
                    >
                      Ver mais
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductsByCategory
