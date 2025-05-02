import { db } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import ProductsNavDropdown from './DropdownProducts'
import { getCategories } from '@/data/dal/categories/get-categories'

const Header = async () => {
  const categories = await getCategories()

  const parentCategories = categories.filter((c) => c.parentId === null)

  return (
    <nav className="inset-x-0 top-0 mb-10 h-[75px] w-full border-b border-secondary-yellow bg-yellow-nav transition-all md:h-[85px] md:px-5 lg:h-[125px] lg:px-10">
      <div className="flex h-[60px] items-center justify-between px-3 md:h-[80px] lg:h-[125px]">
        <Link className="relative h-20 w-28" href="/">
          <Image src="/andtex-logo.png" fill alt="logo" />
        </Link>

        <div className="flex h-full items-center gap-5 font-medium text-blue-text">
          <ProductsNavDropdown categories={parentCategories} />
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
