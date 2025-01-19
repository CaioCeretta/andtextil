import { useState } from 'react'

const NavbarToggler = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="lg:hidden">
      <button
        className="flex items-center px-3 py-2 text-gray-500 focus:outline-none"
        onClick={toggleNavbar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-12.3 right-0 w-[50vw]  bg-white border p-4">
          <ul className="space-y-2">
            <li>
              <a href="/produtos" className="text-gray-700 hover:text-black">
                Produtos
              </a>
            </li>
            <li>
              <a href="/sobre" className="text-gray-700 hover:text-black">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="/qualidade" className="text-gray-700 hover:text-black">
                Qualidade
              </a>
            </li>
            <li>
              <a
                href="/diferenciais"
                className="text-gray-700 hover:text-black"
              >
                Diferenciais
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavbarToggler
