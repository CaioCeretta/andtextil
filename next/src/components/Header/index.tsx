'use client'

import { db } from '@/db'
import Image from 'next/image'
import Link from 'next/link'
import ProductsNavDropdown from './DropdownProducts'
import useCategories from '@/data/hooks/useCategories'

const Header = () => {
  const { categories } = useCategories()

  return (
    <nav className="insert-x-0 top-0 h-[75px] w-full border-b border-secondary-yellow bg-yellow-nav px-2 transition-all md:h-[85px] md:px-5 lg:h-[125px] lg:px-10">
      <div className="flex h-[60px] items-center justify-between px-3 md:h-[80px] lg:h-[125px]">
        <a href="/">
          <Image src="/andtex-logo.png" width={100} height={20} alt="logo" />
        </a>

        <div className="flex h-full items-center gap-5 font-bold text-blue-text">
          <ProductsNavDropdown categories={categories} />
          <div className="flex items-center justify-center gap-x-2 text-sm lg:text-lg">
            <Link href="/contato">Contato</Link>
          </div>
          <div className="flex items-center justify-center gap-x-2 text-sm lg:text-lg">
            <Link href="/quem-somos">Quem Somos</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
