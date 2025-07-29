import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CardFooter = ({ children, ...rest }: FooterCardProps) => {
    return (
        <footer
            {...rest}
            className={twMerge(`w-full min-h-[15%] bg-pink-300`, rest.className)}
        >
            {children}
        </footer>
    )
}
