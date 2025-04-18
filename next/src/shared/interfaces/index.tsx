import { Prisma } from '@prisma/client'
import type { CategoryType, ProductType } from '../types'

export interface CategoriesContextProps {
  categories: CategoryType[]
  getParentCategories: () => CategoryType[]
  selectedCategory: number | null
  selectCategory: (id: number) => void
  emptyCategorySelected: () => void
}

export interface ProductsContextProps {
  products: ProductType[]
}
