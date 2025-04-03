'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { ProductType } from '@/shared/interfaces'
import Image from 'next/image'
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
            <div className="flex flex-row items-center justify-center p-4">
              <Card className="w-full max-w-xs rounded-xl border">
                <div className="grid gap-4 p-4">
                  <div className="relative aspect-square h-72 overflow-hidden rounded-xl">
                    <Image
                      src={productImage}
                      alt={product.name || 'Product image'}
                      className="h-full rounded-md"
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
                    className="cursor-pointer bg-secondary-yellow"
                  >
                    Ver mais
                  </Button>
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
