import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CardBody = ({ children, ...rest }: CardBodyProps) => {
    return (
        <div
            {...rest}
            className={twMerge(`w-full min-h-[70%]`, rest.className)}>
            {children}
        </div>
    )
}
