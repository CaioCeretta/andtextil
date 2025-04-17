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
        <div className="flex items-center justify-center gap-x-2 text-sm lg:text-lg">
          <DropdownMenuTrigger>Produtos</DropdownMenuTrigger>
        </div>
        <DropdownMenuContent className="space-y-2 bg-main-yellow p-2">
          <DropdownMenuItem className="md:text-md rounded-none bg-main-yellow text-justify text-sm">
            <Link
              href="/categorias"
              className="md:text-md m-0 p-0 text-sm font-semibold text-blue-text lg:text-lg"
            >
              Todos Produtos
            </Link>
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem
              className="md:text-md md:text-md z-20 rounded-none bg-main-yellow text-justify text-sm font-semibold text-blue-text lg:text-lg"
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
