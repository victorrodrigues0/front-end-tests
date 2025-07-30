import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CardFooter = ({ children, ...rest }: FooterCardProps) => {
    return (
        <footer
            {...rest}
            className={twMerge(`w-full text-sm p-1 text-gray-800`, rest.className)}
        >
            {children}
        </footer>
    )
}
