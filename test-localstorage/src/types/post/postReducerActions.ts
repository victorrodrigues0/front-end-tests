import { Post } from "./postType"

type addAction = {
    type: 'add',
    payload: Omit<Post, 'id'>
}

type deleteAction = {
    type: 'delete',
    payload: {
        id: number
    }
}

type initAction = {
    type: "init",
    payload: Post[]
}

export type PostReducerActionsProps = addAction | deleteAction | initAction;