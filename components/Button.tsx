import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  const baseClass = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center'

  const variantClass = {
    primary: 'bg-gold-600 text-white hover:bg-gold-700 disabled:bg-charcoal-300 disabled:text-charcoal-500',
    secondary: 'bg-charcoal-800 text-white hover:bg-charcoal-900 disabled:bg-charcoal-300 disabled:text-charcoal-500',
    tertiary: 'bg-cream-100 text-charcoal-900 border border-charcoal-200 hover:bg-cream-200 disabled:bg-charcoal-100 disabled:text-charcoal-400',
    outline: 'bg-transparent border-2 border-gold-600 text-gold-600 hover:bg-gold-50 disabled:border-charcoal-300 disabled:text-charcoal-300',
  }

  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      disabled={disabled}
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
