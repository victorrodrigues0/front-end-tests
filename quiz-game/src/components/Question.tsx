import React from 'react'

type QuestionProps = {
    text: string,
}

export const Question = ({ text }: QuestionProps) => {
    return (
        <div>
            {text}
        </div>
    )
}
