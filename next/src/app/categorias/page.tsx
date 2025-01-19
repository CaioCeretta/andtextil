import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { db } from '@/db'
import { capitalizeString } from '@/lib/utils'
import Link from 'next/link'

const Categorias = async () => {
  const categories = await db.categories.findMany({
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
            <h1 className="text-2xl font-bold uppercase mb-2">
              {capitalizeString(category.name)}
            </h1>
          </Link>
          <div className="flex justify-start items-center flex-row flex-wrap gap-6">
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="w-full max-w-xs rounded-xl border"
              >
                <Link href={`product/${product.id}`}>
                  <div className="grid gap-4 p-4">
                    <div className="aspect-square w-full overflow-hidden rounded-xl">
                      <img
                        src={
                          product.images
                            ? product.images[0].url
                            : '/placeholder.png'
                        }
                        alt={product.name || 'Product image'}
                        className="aspect-4/5 object-cover border w-[250px]"
                      />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="font-semibold text-sm md:text-base text-blue-text">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
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
