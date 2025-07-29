"use client"

import { ChatType } from "@/reducers/chatReducer";
import { createContext, Dispatch } from "react";

type ChatContextType = {
    loggedUser: string,
    setLoggedUser: Dispatch<React.SetStateAction<string>>,
    chatList: ChatType[],
    addMessage: (author: string, message: string) => void
}

export const chatContext = createContext<ChatContextType | null>(null);