"use client"

import { useChat } from '@/hooks/chatContextHook';
import React, { useState } from 'react'
import { Input } from './Input';

export const LoginChat = () => {
    const { setLoggedUser } = useChat();
    const [userName, setUserName] = useState('');

    const handleLoginChat = () => {
        setLoggedUser(userName);
    }

    return (
        <section className='w-1/3 h-1/3 flex gap-5 justify-center' >
            <Input
                placeholder='Insira seu nome...'
                value={userName}
                setFunciton={setUserName}
            />
            <button className='py-1 px-7 bg-zinc-300 cursor-pointer rounded-sm
        hover:bg-zinc-400'
                onClick={handleLoginChat}
            >Entrar</button>
        </section >
    )
}
