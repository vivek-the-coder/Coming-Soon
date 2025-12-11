import React from 'react'
import { Navigation, NavigationLink } from './Navigation'
import { Footer } from './Footer'

export interface LayoutProps {
  children: React.ReactNode
  brandName?: string
  navigationLinks?: NavigationLink[]
  showNavigation?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  brandName = 'Luxury Hotel',
  navigationLinks = [],
  showNavigation = true,
  showFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream-50">
      {showNavigation && <Navigation brandName={brandName} links={navigationLinks} />}
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer brandName={brandName} />}
    </div>
  )
}
