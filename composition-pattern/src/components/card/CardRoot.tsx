import React, { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const CardRoot = ({ children, ...rest }: CardRootProps) => {
    return (
        <div
            {...rest}
            className={twMerge(`min-h-[320px] w-1/4 bg-zinc-200 rounded-sm text-black`, rest.className)}
        >
            {children}
        </div>
    )
}
