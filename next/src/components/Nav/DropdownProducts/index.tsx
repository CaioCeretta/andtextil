'use server'

import { db } from '@/db'
import ProductsNavDropdown from './ProductsNavDropdown'

const DropdownProducts = async () => {
  const categories = await db.categories.findMany()

  return <ProductsNavDropdown categories={categories} />
}

export default DropdownProducts
