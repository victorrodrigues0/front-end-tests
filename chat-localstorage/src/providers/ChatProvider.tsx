"use client"

import { chatContext } from '@/contexts/chatContext'
import { optionsLocalStorage } from '@/functions/optionsLocalStorage'
import { chatReducer } from '@/reducers/chatReducer'
import React, { ReactNode, useEffect, useReducer, useState } from 'react'

type ChatProviderProps = {
    children: ReactNode
}
export const ChatProvider = ({ children }: ChatProviderProps) => {

    const [loggedUser, setLoggedUser] = useState('');
    const [chatList, dispatch] = useReducer(chatReducer, []);


    useEffect(() => {
        const user = localStorage.getItem(optionsLocalStorage[0])

        if (user) {
            setLoggedUser(user);
        }
    }, [])

    useEffect(() => {
        const chats = JSON.parse(localStorage.getItem(optionsLocalStorage[1]) || '[]');

        dispatch({
            type: "init",
            payload: chats
        });

    }, [])

    useEffect(() => {
        localStorage.setItem(optionsLocalStorage[0], loggedUser)
    }, [loggedUser])


    useEffect(() => {
        localStorage.setItem(optionsLocalStorage[1], JSON.stringify(chatList));
    }, [chatList])

    const addMessage = (author: string, message: string) => {
        dispatch({
            type: 'add',
            payload: {
                author, message
            }
        })
    }

    return (
        <chatContext.Provider value={{ loggedUser, setLoggedUser, chatList, addMessage }}>
            {children}
        </chatContext.Provider>
    )
}
