"use client"

import { usePost } from '@/hooks/post/postContex';
import React, { useState } from 'react'

export const Form = () => {
    const [authorField, setAuthorField] = useState('');
    const [textAreaField, settextAreaField] = useState('');

    const postContext = usePost();
    return (
        <div className='w-[400px] h-[300px] bg-red-900 rounded-sm flex flex-col px-10'>
            <label htmlFor="">Insira o autor</label>
            <input type="text" className='bg-zinc-300 text-black'
                value={authorField}
                onChange={(e) => setAuthorField(e.target.value)}
            />
            <label htmlFor="">Insira o conteudo</label>
            <textarea name="" id="" className='bg-zinc-300 text-black'
                onChange={(e) => settextAreaField(e.target.value)}
                value={textAreaField}
            ></textarea>
            <button className='mt-10 px-7 py-2 bg-blue-900 cursor-pointer rounded-sm transition ease-in
            hover:bg-blue-950'
                onClick={() => {
                    postContext.addPost(authorField, textAreaField)
                    setAuthorField('');
                    settextAreaField('');
                }}
            >
                enviar
            </button>
            <button className='mt-10 px-7 py-2 bg-yellow-900 cursor-pointer rounded-sm transition ease-in
            hover:bg-yellow-950'
                onClick={() => {
                    postContext.clearLocalStorage()
                }}
            >
                Limpar lista da memória
            </button>
        </div>
    )
}
