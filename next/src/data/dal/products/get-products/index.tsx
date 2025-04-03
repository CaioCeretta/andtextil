'use server'

import { db } from '@/db'

export const getProducts = async () => {
  const products = await db.product.findMany({
    include: {
      category: true,
      applications: true,
      characteristics: true,
      images: true,
      specifications: {
        include: {
          specificationField: true,
        },
      },
    },
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

  return formattedProducts
}
