'use server'

import { db } from '@/lib/prisma'
import { productIncludes } from '@/shared/types'

// export const getProducts = async () => {
//   const products = await db.product.findMany({
//     include: {
//       category: true,
//       applications: true,
//       characteristics: true,
//       images: true,
//       specifications: {
//         include: {
//           specificationField: true,
//         },
//       },
//     },
//   })

export const getProducts = async () => {
  const products = await db.product.findMany({
    include: productIncludes,
  })

  return products
}

export const getFormattedProducts = async () => {
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

  return formattedProducts
}
