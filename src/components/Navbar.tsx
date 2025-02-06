import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Premium', href: '/premium' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">SetubalFitLife</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/premium"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
