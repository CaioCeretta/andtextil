import type { Prisma } from '@prisma/client'

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
