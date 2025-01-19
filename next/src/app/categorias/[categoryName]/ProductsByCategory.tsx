'use client'

import { Card } from '@/components/ui/card'
import { Image, Product } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

type ProductsByCategoryProps = {
  products: (Product & { images: Image[] })[]
}

const ProductsByCategory = ({ products }: ProductsByCategoryProps) => {
  const router = useRouter()

  return (
    <>
      {products.map((product) => {
        const productImage = product.images[0]?.url || ''

        return (
          <div key={product.id}>
            <div className="flex justify-center items-center flex-row">
              <Card className="w-full max-w-xs rounded-xl border">
                <div className="grid gap-4 p-4">
                  <div className="aspect-square w-full overflow-hidden rounded-xl">
                    <img
                      src={productImage}
                      alt={product.name || 'Product image'}
                      className="aspect-4/5 object-cover border w-[250px]"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <h3 className="font-semibold text-sm md:text-base text-blue-text">
                      {product.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <Button
                    onClick={() => router.push(`/produtos/${product.name}`)}
                    size="sm"
                    variant="default"
                    className="bg-secondary-yellow cursor-pointer"
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
