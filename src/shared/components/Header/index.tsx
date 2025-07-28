import React, { useState } from 'react'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`absolute inset-x-0 top-0 z-20 ${className}`}>
      <nav className="flex items-center justify-end p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="flex size-6 flex-col items-center justify-center space-y-1 sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden space-x-4 sm:flex sm:space-x-6 lg:space-x-8">
          <li>
            <a
              href="/"
              className="text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4 sm:text-base lg:text-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4 sm:text-base lg:text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4 sm:text-base lg:text-lg"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile navigation menu */}
        <div
          className={`absolute right-0 top-full w-48 bg-black/90 backdrop-blur-sm transition-all duration-300 sm:hidden ${
            isMenuOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-3 p-4">
            <li>
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium text-white transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
