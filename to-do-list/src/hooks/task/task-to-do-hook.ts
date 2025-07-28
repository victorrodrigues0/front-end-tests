"use client"

import { taskContext } from "@/context/task/taskContext"
import { useContext } from "react"

export const useTaskContext = () => {
    const context = useContext(taskContext);

    if (!context) {
        throw new Error("useTaskContext deve ser usado dentro de um TaskProvider");
    }

    return context;
}