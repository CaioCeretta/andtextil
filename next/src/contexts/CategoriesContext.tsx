'use client'

import { createContext, useState, useEffect, useMemo } from 'react'

import { CategoriesContextProps } from '@/shared/interfaces'
import type { CategoryType } from '@/shared/types'

const initialCategoriesContext: CategoriesContextProps = {
  selectedCategory: null,
  emptyCategorySelected: () => {},
  getParentCategories: () => [],
  selectCategory: () => {},
}

export const CategoriesContext = createContext<CategoriesContextProps>(
  initialCategoriesContext,
)

export const CategoriesProvider = (props: any) => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories')

      const data = await res.json()

      setCategories(data)
    }

    fetchCategories()
  }, [])

  function selectCategory(categoryId: number): void {
    return setSelectedCategory(categoryId)
  }

  function emptyCategorySelected(): void {
    setSelectedCategory(null)
  }

  function getParentCategories() {
    return categories.filter((category) => category.parentId == null)
  }

  return (
    <CategoriesContext.Provider
      value={{
        selectedCategory,
        selectCategory,
        emptyCategorySelected,
        getParentCategories,
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  )
}
