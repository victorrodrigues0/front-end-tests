"use client"

import { postContext } from '@/contexts/post/postContext'
import { posts } from '@/data/post/listPosts';
import { postReducer } from '@/reducers/post/postReducer';
import { PostProviderProps } from '@/types/post/postProviderType'
import React, { useEffect, useReducer } from 'react'

export const PostProvider = ({ children }: PostProviderProps) => {
    const [listPosts, dispatch] = useReducer(postReducer, []);
    var verifyAdd = false;

    useEffect(() => {
        if (verifyAdd) {
            localStorage.setItem('posts', JSON.stringify(posts));
        }
        const savedPosts = JSON.parse(localStorage.getItem("posts") || '[]');
        dispatch({
            type: 'init',
            payload: savedPosts
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(listPosts))
        verifyAdd = true;
    }, [listPosts])

    const addPost = (author: string, content: string) => {
        dispatch({
            type: "add",
            payload: {
                author, content
            }
        });
    }
    const deletePost = (id: number) => {
        dispatch({
            type: "delete",
            payload: {
                id
            }
        });
    }

    const clearLocalStorage = () => {
        localStorage.clear();
    }
    return (
        <postContext.Provider value={{ listPosts, addPost, deletePost, clearLocalStorage }}>
            <div className='max-w-screen min-h-screen bg-zinc-900 text-white flex justify-center gap-3 pt-32'>
                {children}
            </div>
        </postContext.Provider>
    )
}
