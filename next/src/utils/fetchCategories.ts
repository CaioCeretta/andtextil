import { db } from '@/db'

export async function getCategories() {
  const categories = await db.category.findMany()

  return categories
}
