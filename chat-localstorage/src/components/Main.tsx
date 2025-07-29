"use client"

import React from 'react'
import { ChatProvider } from "@/providers/ChatProvider";
import { SectionChat } from './SectionChat';

export const Main = () => {
    return (
        <main className='min-w-full min-h-screen bg-zinc-900 flex justify-center pt-10 text-black'>
            <ChatProvider>
                <SectionChat />
            </ChatProvider>
        </main>
    )
}
