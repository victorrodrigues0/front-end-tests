"use client"

import { chatContext } from "@/contexts/chatContext"
import { useContext } from "react"


export const useChat = () => {
    const context = useContext(chatContext)

    if (!context) {
        throw new Error("Erro no context chat");
    }

    return context;
}