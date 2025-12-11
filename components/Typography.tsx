import React from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, children, className = '', ...props }) => {
  const baseClass = 'font-serif font-bold text-charcoal-900'
  const sizeMap = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  return React.createElement(HeadingTag, {
    className: `${baseClass} ${sizeMap[level]} ${className}`,
    ...props,
    children,
  })
}

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'large' | 'small'
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ variant = 'default', children, className = '', ...props }) => {
  const variantClass = {
    default: 'text-base',
    large: 'text-lg',
    small: 'text-sm',
  }

  return (
    <p className={`${variantClass[variant]} text-charcoal-700 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  )
}

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'muted' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  variant = 'default',
  size = 'base',
  weight = 'normal',
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  }

  const weightClass = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }

  const variantClass = {
    default: 'text-charcoal-900',
    muted: 'text-charcoal-600',
    accent: 'text-gold-600',
  }

  return (
    <span className={`${sizeClass[size]} ${weightClass[weight]} ${variantClass[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}
