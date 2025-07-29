import React, { ComponentType, ElementType, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextAreaInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    setChange: React.Dispatch<React.SetStateAction<string>>
    icon?: ComponentType<{ className: string }>
    position?: "right" | "left"
}

export const TextAreaInput = ({ value, setChange, icon: Icon, position = 'right', ...rest }: TextAreaInputProps) => {
    return (
        <div className='relative'>
            <input
                {...rest}
                value={value}
                onChange={(e) => setChange(e.target.value)}
                className={twMerge(`px-7 py-2 pl-4 pr-2 ${Icon ? position === "right" ? "pr-12" : "pl-13 pr-5" : ""} bg-zinc-300 text-black rounded-md focus:outline-1 focus:outline-black`, rest.className)}
            />
            {Icon &&
                <Icon className={`text-black size-5 absolute top-[10px] ${position === "right" ? "right-4" : "left-4"}`} />
            }
        </div>
    )
}
