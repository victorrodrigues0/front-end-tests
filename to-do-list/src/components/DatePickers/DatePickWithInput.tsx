"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useTaskContext } from "@/hooks/task/task-to-do-hook"
import { taskContext } from "@/context/task/taskContext"

function formatDate(date: Date | undefined) {
    if (!date) {
        return ""
    }

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

function isValidDate(date: Date | undefined) {
    if (!date) {
        return false
    }
    return !isNaN(date.getTime())
}


export function DatePickerWithInput({ dateToDo, onDateChange }: { dateToDo?: Date; onDateChange?: (date: Date) => void }) {
    const [open, setOpen] = React.useState(false)
    const { date: contextDate, setDate } = useTaskContext();
    const [localDate, setLocalDate] = React.useState<Date>(dateToDo || contextDate);
    const [month, setMonth] = React.useState<Date | undefined>(localDate)
    const [value, setValue] = React.useState(() => localDate ? formatDate(localDate) : "")

    React.useEffect(() => {
        if (dateToDo) {
            setLocalDate(dateToDo);
            setValue(formatDate(dateToDo));
            setMonth(dateToDo);
        }
    }, [dateToDo])

    return (
        <div className="flex flex-col gap-3">
            <div className="relative flex gap-2">
                <Input
                    id="date"
                    value={value}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10"
                    onChange={(e) => {
                        const date = new Date(e.target.value)
                        setValue(e.target.value)
                        if (isValidDate(date)) {
                            setLocalDate(date)
                            setMonth(date)
                            onDateChange?.(date)
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault()
                            setOpen(true)
                        }
                    }}
                />
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                            <CalendarIcon className="size-3.5" />
                            <span className="sr-only">Selecionar data</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                    >
                        <Calendar
                            mode="single"
                            selected={localDate}
                            captionLayout="dropdown"
                            month={month}
                            onMonthChange={setMonth}
                            onSelect={(date) => {
                                const selectedDate = date ?? new Date();
                                setLocalDate(selectedDate)
                                setValue(formatDate(selectedDate))
                                onDateChange?.(selectedDate)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
