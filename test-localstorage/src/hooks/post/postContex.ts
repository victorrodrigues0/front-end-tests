"use client"

import { postContext } from "@/contexts/post/postContext"
import { useContext } from "react"

export const usePost = () => {
    const context = useContext(postContext);

    if (!context) {
        throw new Error("Erro no context");
    }

    return context;
}