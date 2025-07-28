"use client"

import { usePost } from '@/hooks/post/postContex'
import React from 'react'

export const ListPost = () => {
    const postContext = usePost();

    return (
        <div>
            {postContext.listPosts.map((post, idx) =>
                <div key={idx + 1}>
                    <p>{post.author}</p>
                    <p>{post.content}</p>
                    <button className='px-6 py-1 bg-red-500 cursor-pointer'
                        onClick={() => postContext.deletePost(post.id)}
                    >Deletar</button>
                    <hr />
                </div>
            )}
        </div>
    )
}
