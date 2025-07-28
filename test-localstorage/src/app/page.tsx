import { Form } from '@/components/Form';
import { ListPost } from '@/components/ListPost';
import { PostProvider } from '@/providers/post/PostProvider';
import React from 'react'

const Page = () => {
  return (
    <PostProvider>
      <Form />
      <ListPost />
    </PostProvider>
  )
}
export default Page;