import { db } from '@/lib/prisma'

export async function getCategories() {
  const categories = db.category.findMany()

  return categories
}
