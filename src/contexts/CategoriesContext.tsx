'use client'

import { createContext, useState } from 'react'

import { CategoriesContextProps } from '@/shared/interfaces'
import type { CategoryType } from '@/shared/types'

const initialCategoriesContext: CategoriesContextProps = {
  selectedCategory: null,
  emptyCategorySelected: () => {},
  selectCategory: () => {},
}

export const CategoriesContext = createContext<CategoriesContextProps>(
  initialCategoriesContext,
)

export const CategoriesProvider = (props: any) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  function selectCategory(categoryId: number): void {
    return setSelectedCategory(categoryId)
  }

  function emptyCategorySelected(): void {
    setSelectedCategory(null)
  }

  return (
    <CategoriesContext.Provider
      value={{
        selectedCategory,
        selectCategory,
        emptyCategorySelected,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  )
}
