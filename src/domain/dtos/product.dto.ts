import type { ProductWithDetails } from '@/shared/types/prisma-types'

export type FormattedProduct = Omit<ProductWithDetails, 'specifications'> & {
  specifications: Record<string, string[]>
}
