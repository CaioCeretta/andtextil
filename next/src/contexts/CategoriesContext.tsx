'use client'

import { createContext, useState, useEffect, useMemo } from 'react'

import { CategoriesContextProps } from '@/shared/interfaces'
import type { CategoryType } from '@/shared/types'

// interface DataFormat {
// 	categories: Category[]
// 	products: Product[]
// }

// const dataTyped: DataFormat = data as DataFormat

// Criação dos contextos

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
    async function fetchCategories() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}api/categories`,
      )

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
