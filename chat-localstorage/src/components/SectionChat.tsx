import React from 'react'
import { LoginChat } from './LoginChat'
import { useChat } from '@/hooks/chatContextHook'
import { Chat } from './Chat'

export const SectionChat = () => {
    const { loggedUser } = useChat()
    return (
        <section className='w-full h-full flex justify-center'>
            {!loggedUser && <LoginChat />}
            {loggedUser && <Chat />}
        </section>
    )
}
