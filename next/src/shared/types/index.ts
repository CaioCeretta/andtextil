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
