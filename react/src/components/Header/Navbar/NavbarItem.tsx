interface NavItemProps {
  title: string
  path: string
}

const NavItem = ({ title, path }: NavItemProps) => {
  return (
    <a
      href={path}
      className="font-bold text-xl  p-2 border-[#9e7804]  border-b rounded-md"
    >
      {title}
    </a>
  )
}

export default NavItem
