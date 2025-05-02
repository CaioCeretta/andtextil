import { Prisma } from '@prisma/client'
import { ProductType, CategoryType } from '../types'

export interface CategoriesContextProps {
  selectedCategory: number | null
  selectCategory: (id: number) => void
  emptyCategorySelected: () => void
}

export interface ProductsContextProps {
  products: ProductType[]
}
