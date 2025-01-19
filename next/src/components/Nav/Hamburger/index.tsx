import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HamburguerMenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburguerMenuProps) => {
  return (
    <Button
      variant={'ghost'}
      className="text-white md:hidden"
      onClick={toggleMenu}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  )
}

export default HamburgerMenu
