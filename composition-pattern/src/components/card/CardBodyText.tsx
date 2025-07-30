import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


interface CardBodyTextProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const CardBodyText = ({ children, ...rest }: CardBodyTextProps) => {
    return (
        <p
        {...rest}
        className={twMerge(`text-zinc-800 mx-3 my-1`, rest.className)}
        >
            {children}
        </p>
    )
}
