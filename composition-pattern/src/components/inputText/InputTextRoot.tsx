import React, { ReactNode } from 'react'

interface InputTextRootProps {
    children: ReactNode
}

export const InputTextRoot = ({ children }: InputTextRootProps) => {
    return (
        <div className='flex gap-3'>
            {children}
        </div>
    )
}
