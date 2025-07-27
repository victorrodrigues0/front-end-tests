import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode,
    gameRules: () => void
}

export const Button = ({ children, gameRules }: ButtonProps) => {
    return (
        <button className="px-3 py-1 bg-zinc-300 cursor-pointer" onClick={gameRules}>
            {children}
        </button>
    )
}
