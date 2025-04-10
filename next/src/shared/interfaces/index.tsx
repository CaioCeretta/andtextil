import { Prisma } from '@prisma/client'

export type ProductType = Prisma.ProductGetPayload<{
  include: {
    category: true
    images: true
    characteristics: true
    applications: true
    specifications: {
      include: {
        specificationField: true
      }
    }
  }
}>

export type CategoryType = Prisma.CategoryGetPayload<{
  include: {
    specificationFields: true
    products: true
  }
}>

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
