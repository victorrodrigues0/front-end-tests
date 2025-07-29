import React from 'react'

type InputProps = {
    placeholder: string,
    value: string,
    setFunciton: React.Dispatch<React.SetStateAction<string>>
}

export const Input = ({ placeholder, value, setFunciton }: InputProps) => {


    return (
        <input type="text"
            placeholder={placeholder}
            className='bg-zinc-300 p-1 focus:border-black'
            value={value}
            onChange={(e) => setFunciton(e.target.value)}
        />
    )
}
