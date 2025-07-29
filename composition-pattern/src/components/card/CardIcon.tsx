import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardIconProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode
}

export const CardIcon = ({ children, ...rest }: CardIconProps) => {
    return (
        <p
            {...rest}
            className={twMerge(`size-5`, rest.className)}
        >
            {children}
        </p>
    )
}
