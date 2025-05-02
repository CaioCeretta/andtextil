import { db } from '@/lib/prisma'

export async function getCategories() {
  const categories = db.category.findMany({
    include: {
      products: true,
      specificationFields: true,
    },
  })

  return categories
}
