import React from 'react'

export const Rating = ({ rate }: { rate: number }) => {
    return (
        <div>
            {`😊`.repeat(rate)}{`😒`.repeat(5 - rate)}
        </div>
    )
}
