import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import type { Category, Product } from '@prisma/client'
import Image from 'next/image'
import type { CategoryType, ProductType } from '@/shared/types'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

export interface CategoryCardProps {
  product: ProductType
  category: CategoryType
}

export const CategoryCard = ({ product, category }: CategoryCardProps) => {
  return (
    <div className="flex h-full flex-col items-center rounded-md p-4 shadow-sm transition hover:shadow-md md:w-full">
      {/* Imagem */}
      <div className="relative aspect-square h-[15rem] w-[10rem] min-w-full overflow-hidden rounded-xl lg:h-[18rem] lg:w-[12rem] xl:h-[25rem] xl:w-[15rem]">
        <Link href={`categorias/${category.name}`}>
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            className="rounded-md object-cover"
          />
        </Link>
      </div>

      {/* Botão */}
      <Link
        className="mt-10 flex items-center justify-center rounded-full text-zinc-800 shadow-md transition-transform hover:scale-110"
        href={`categorias/${category.name}`}
      >
        <Button className="flex items-center gap-3 bg-main-yellow hover:bg-yellow-400">
          <PlusIcon className="h-5 w-5 text-blue-text" />
          <span className="text-xl uppercase text-blue-text">
            {category.name}
          </span>
        </Button>
      </Link>
    </div>
  )
}

export default CategoryCard
