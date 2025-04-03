'use client'

import { createContext, useState, useEffect, useMemo } from 'react'

import { CategoryType, CategoriesContextProps } from '../../shared/interfaces'

// interface DataFormat {
// 	categories: Category[]
// 	products: Product[]
// }

// const dataTyped: DataFormat = data as DataFormat

// Criação dos contextos
export const CategoriesContext = createContext<CategoriesContextProps>(
  {} as any,
)

export const CategoriesProvider = (props: any) => {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch('/api/categories')

      const data = await res.json()

      setCategories(data)
    }

    fetchCategories()
  }, [])

  function selectCategory(categoryId: number): void {
    return setSelectedCategory(categoryId)
  }

  const value = useMemo(
    () => ({
      categories,
      selectedCategory,
      selectCategory,
    }),
    [categories, selectedCategory],
  )

  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  )
}
