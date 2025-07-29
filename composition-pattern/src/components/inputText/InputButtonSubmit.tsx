import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputButtonSubmitPropsm extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    buttonFn: () => void
}

export const InputButtonSubmit = ({ children, buttonFn, ...rest }: InputButtonSubmitPropsm) => {
    return (
        <button
            {...rest}
            className={twMerge(`px-5 py-1 bg-zinc-200 rounded-sm text-black cursor-pointer transition delay-100 ease-in hover:bg-zinc-300`, rest.className)}
            onClick={buttonFn}
        >
            {children}
        </button>
    )
}
