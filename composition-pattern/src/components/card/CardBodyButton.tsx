import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardBodyButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: ReactNode
}

export const CardBodyButton = ({ children, ...rest }: CardBodyButtonProps) => {
    return (
        <button
            {...rest}
            className={twMerge(`m-2 px-10 py-2 bg-zinc-800 rounded-sm text-zinc-200 transition ease-in delay-100 cursor-pointer hover:bg-zinc-700`, rest.className)}
        >
            {children}
        </button>
    )
}
