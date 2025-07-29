import React, { ComponentType, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export const CardHeaderTitle = ({ children, ...rest }: CardHeaderTitleProps) => {
  return (
    <h1
      {...rest}
      className={twMerge(`text-lg font-bold`, rest.className)}
    >
      {children}
    </h1>
  )
}
