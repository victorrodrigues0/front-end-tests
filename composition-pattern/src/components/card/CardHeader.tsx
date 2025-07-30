import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CardHeader = ({ children, ...rest }: CardHeaderProps) => {
    return (
        <div
            {...rest}
            className={twMerge(`w-full min-h-[15%] flex items-center p-2 px-5 justify-between shadow-md`, rest.className)}
        >
            {children}
        </div>
    )
}
