import { Post } from "./postType"

export type PostContextType = {
    listPosts: Post[],
    addPost: (author: string, content: string) => void,
    deletePost: (id: number) => void,
    clearLocalStorage: () => void
}