import React from 'react'
import Link from 'next/link'

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationProps {
  brandName?: string
  links?: NavigationLink[]
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ brandName = 'Luxury Hotel', links = [], className = '' }) => {
  const defaultLinks: NavigationLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Dining', href: '/dining' },
    { label: 'Contact', href: '/contact' },
  ]

  const navLinks = links.length > 0 ? links : defaultLinks

  return (
    <nav className={`bg-charcoal-900 text-white ${className}`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <span className="text-2xl font-serif font-bold text-gold-400 hover:text-gold-300 cursor-pointer transition-colors">
              {brandName}
            </span>
          </Link>
          <ul className="flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="text-cream-50 hover:text-gold-400 transition-colors cursor-pointer font-medium">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
