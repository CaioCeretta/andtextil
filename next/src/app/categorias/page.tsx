import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { db } from '@/db'
import { capitalizeString } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Categorias = async () => {
  const categories = await db.category.findMany({
    include: {
      products: {
        include: {
          images: true, // Assuming 'Image' field exists in the products
        },
      },
    },
  })

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id} className="m-16">
          <Link href={`/categorias/${category.name}`}>
            <h1 className="mb-2 text-2xl font-bold uppercase">
              {capitalizeString(category.name)}
            </h1>
          </Link>
          <div className="flex flex-row flex-wrap items-center justify-start gap-6">
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="w-full max-w-xs rounded-xl border"
              >
                <Link href={`product/${product.id}`}>
                  <div className="grid gap-4 p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-xl">
                      <Image
                        src={
                          product.images
                            ? product.images[0].url
                            : '/placeholder.png'
                        }
                        alt={product.name || 'Product image'}
                        className="aspect-4/5 w-[250px] border object-cover"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-sm font-semibold text-blue-text md:text-base">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground md:text-base">
                        {product.description}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant={'default'}
                      className="bg-secondary-yellow"
                    >
                      Ver mais
                    </Button>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categorias
