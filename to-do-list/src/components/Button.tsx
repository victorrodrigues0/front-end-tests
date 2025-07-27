import React from 'react'
import { Button } from "@/components/ui/button"

type BtnProps = {
    text: string,
    color?: string,
    click?: () => void,
}

export const ButtonApp = ({ text, color, click }: BtnProps) => {
    return (
        <div>
            <Button variant={"default"} className={`cursor-pointer ${color}`} onClick={click}>
                {text}
            </Button>
        </div >
    )
}
