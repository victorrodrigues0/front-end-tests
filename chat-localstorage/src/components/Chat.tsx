import { useChat } from '@/hooks/chatContextHook';
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Input } from './Input';
import { optionsLocalStorage } from '@/functions/optionsLocalStorage';

export const Chat = () => {
    const { loggedUser, chatList, addMessage } = useChat();
    const refLastMessage = useRef<HTMLDivElement | null>(null);

    const [messageUser, setMessageUser] = useState('');
    const [messageBot, setMessageBot] = useState('');

    useEffect(() => {
        refLastMessage.current?.scrollIntoView({ behavior: "smooth" })
    }, [chatList])

    const handleLogoutUser = () => {
        localStorage.removeItem(optionsLocalStorage[0]);
        window.location.reload();
    }

    const handleSubmitMessageUser = (e: FormEvent) => {
        e.preventDefault();
        addMessage(loggedUser, messageUser);
        setMessageUser('');
    }
    const handleSubmitMessageBot = (e: FormEvent) => {
        e.preventDefault();
        addMessage("Bot", messageBot);
        setMessageBot('');
    }

    return (
        <div className='w-1/3 h-full flex flex-col justify-center'>

            <h1
                className='text-white m-5 text-center'
            >Bem vindo - {loggedUser}</h1>

            <div
                className='w-full min-h-[500px]'
            >
                <div className='w-full h-[400px] border border-zinc-200 p-4 overflow-y-auto'>
                    {chatList.map(chat =>
                        <div key={chat.id} ref={refLastMessage}
                            className={`w-[300px] min-h-[70px] bg-zinc-200 p-2 rounded-md mb-4
                        ${chat.author === loggedUser ? "float-right" : "float-left"}
                        `}>
                            <p
                                className='mb-3 text-pink-800'
                            >  - {chat.author}</p>
                            <p>{chat.message}</p>
                        </div>
                    )}
                </div>
                <div
                    className='w-full min-h-[100px] flex flex-col p-5 gap-3'
                >
                    <form className=' flex justify-center' action="" onSubmit={handleSubmitMessageUser}>
                        <Input
                            placeholder='Insira sua mensagem'
                            value={messageUser}
                            setFunciton={setMessageUser}
                        />
                    </form>
                    <form className=' flex justify-center' action="" onSubmit={handleSubmitMessageBot}>
                        <Input
                            placeholder='Insira a mensagem do bot'
                            value={messageBot}
                            setFunciton={setMessageBot}
                        />
                    </form>
                </div>
            </div>

            <div className='w-full flex justify-center p-4'>
                <button
                    className='py-1 px-6 bg-yellow-600 rounded-md cursor-pointer transition ease-in
                hover:bg-amber-700'
                    onClick={handleLogoutUser}
                >Deslogar</button>
            </div>
        </div>
    )
}
