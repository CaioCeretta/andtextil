import { db } from '@/db'

export async function getCategories() {
  const categories = db.category.findMany()

  return categories
}
