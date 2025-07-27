import React, { ReactNode } from 'react'

type CityProps = {
    bgColor?: string,
    children: ReactNode
}

export const City = ({ bgColor = 'bg-red-500', children }: CityProps) => {
    return (
        <div
            className={`p-4 w-full h-22 text-center ${bgColor}`} >
            {children}
        </div>
    )
}
