import React from 'react'
import Link from 'next/link'

export interface FooterProps {
  brandName?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ brandName = 'Luxury Hotel', className = '' }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-charcoal-900 text-cream-50 ${className}`}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-gold-400 mb-4">{brandName}</h3>
            <p className="text-charcoal-300 text-sm">
              Experience luxury and elegance at its finest.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-charcoal-300 hover:text-gold-400 transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms">
                  <span className="text-charcoal-300 hover:text-gold-400 transition-colors cursor-pointer">Rooms</span>
                </Link>
              </li>
              <li>
                <Link href="/dining">
                  <span className="text-charcoal-300 hover:text-gold-400 transition-colors cursor-pointer">Dining</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-400 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-charcoal-300">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@hotel.com</li>
              <li>Address: 123 Main St, City, State</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-400 mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-charcoal-300 hover:text-gold-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-300 hover:text-gold-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-charcoal-300 hover:text-gold-400 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-charcoal-700 pt-8 text-center text-sm text-charcoal-400">
          <p>&copy; {currentYear} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
