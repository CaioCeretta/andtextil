import { db } from '@/db'

export async function getCategories() {
  await db.categories.findMany()
}
