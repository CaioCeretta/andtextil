'use server'

import { db } from '@/lib/prisma'
import { productIncludes } from '@/shared/types/prisma-types'

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
