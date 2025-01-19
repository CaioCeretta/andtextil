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
  id: string
  name: string
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
          <DropdownMenuItem className="text-justify border-b-2 border-gray-300 w-100 py-4">
            <Link href="/categorias">Todos Produtos</Link>
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem
              className="text-justify border-b-2 border-gray-300 w-100 py-4"
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
