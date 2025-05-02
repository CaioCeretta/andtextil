import { db } from '@/lib/prisma'
import { productIncludes } from '@/shared/types/prisma-types'
import type { FormattedProduct } from '../dtos/product.dto'

export const getFormattedProducts = async (): Promise<FormattedProduct[]> => {
  const products = await db.product.findMany({
    include: productIncludes,
  })

  const formattedProducts = products.map((product) => ({
    ...product,
    specifications: product.specifications.reduce<Record<string, string[]>>(
      (acc, spec) => {
        const fieldName = spec.specificationField.name
        if (!acc[fieldName]) {
          acc[fieldName] = [] // Initialize a new array for each key
        }

        acc[fieldName].push(spec.value)

        return acc
      },
      {},
    ),
  }))

  console.log(formattedProducts)

  return formattedProducts
}
