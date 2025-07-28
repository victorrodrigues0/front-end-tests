"use client"

import { createContext } from "react"

type ContextTaskType = {
    date: Date,
    setDate: React.Dispatch<React.SetStateAction<Date>>,
}

export const taskContext = createContext<ContextTaskType | null>(null);