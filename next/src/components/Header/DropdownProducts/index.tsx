'use client'

import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import { capitalizeString, cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

interface Category {
  id: number
  name: string
  parentId: number | null
}

interface ProductsNavDropdownProps {
  categories: Category[]
  className?: string
}

export default function ProductsNavDropdown({
  categories,
  className,
}: ProductsNavDropdownProps) {
  return (
    <div className={cn(`${className}`)}>
      <DropdownMenu>
        <DropdownMenuTrigger>Produtos</DropdownMenuTrigger>
        <DropdownMenuContent className="p-5q">
          <DropdownMenuItem className="w-100 border-b-2 border-gray-300 py-4 text-justify">
            <Link href="/categorias">Todos Produtos</Link>
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem
              className="w-100 border-b-2 border-gray-300 py-4 text-justify"
              key={category.id}
            >
              <Link href={`/categorias/${category.name}`}>
                {capitalizeString(category.name)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
