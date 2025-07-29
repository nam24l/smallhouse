import React from 'react'
import { Link } from 'react-router'

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 left-0 z-20 w-full py-4 text-center text-sm text-white">
      <small>
        &copy; {new Date().getFullYear()} Small House — Designed by{' '}
        <Link
          to="https://envitricity.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:underline"
        >
          <b>Nelson</b>
        </Link>
      </small>
    </footer>
  )
}

export default Footer
