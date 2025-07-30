import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface BodyCardImageProps extends HTMLAttributes<HTMLDivElement> {
    src: string,
    alt?: string
}

export const BodyCardImage = ({ src, alt, ...rest }: BodyCardImageProps) => {
    return (
        <div
            {...rest}
            className={twMerge(`w-full h-[150px] flex justify-center`, rest.className)}
        >
            <img
                className='h-full w-full object-cover'
                src={src} alt={alt} />
        </div>
    )
}
