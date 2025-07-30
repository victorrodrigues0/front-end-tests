import React from 'react'

interface CardFooterCreatedAtProps {
    text: string
}

export const CardFooterCreatedAt = ({ text }: CardFooterCreatedAtProps) => {
    return (
        <p className='w-full flex justify-end'>
            {text}
        </p>
    )
}
