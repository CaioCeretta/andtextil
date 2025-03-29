'use server'

import { db } from '@/db'

export const getProducts = async () => {
  const products = await db.product.findMany()

  return products
}
