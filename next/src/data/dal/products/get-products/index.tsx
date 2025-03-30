'use server'

import { db } from '@/db'

export const getProducts = async () => {
  const products = await db.product.findMany({
    include: {
      category: true,
      applications: true,
      characteristics: true,
      specifications: {
        include: {
          specificationField: true,
        },
      },
    },
  })

  return products
}
