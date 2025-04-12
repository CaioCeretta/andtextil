import type { Prisma } from '@prisma/client'

export const productIncludes = {
  category: true,
  images: true,
  applications: true,
  specifications: {
    include: {
      specificationField: true,
    },
  },
  characteristics: true,
} as const

export type ProductWithDetails = Prisma.ProductGetPayload<{
  include: typeof productIncludes
}>

export type CategoryType = Prisma.CategoryGetPayload<{
  include: {
    specificationFields: true
    products: true
  }
}>
