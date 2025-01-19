import { db } from '@/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let { categoryName } = req.query

  if (!categoryName) {
    return res.status(400).json({ error: 'Category name is required' })
  }

  if (Array.isArray(categoryName)) {
    categoryName = categoryName[0]
  }

  if (categoryName)
    try {
      const category = await db.categories.findUnique({
        where: {
          name: categoryName,
        },
        include: { products: true },
      })

      if (!category) {
        return res.status(404).json({ error: 'Product not found' })
      }

      res.status(200).json(category.products)
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' })
    }
}
