import { TodoItem } from "./todo"

type addAction = {
    type: 'add',
    payload: Omit<TodoItem, 'id'>
}

type deleteAction = {
    type: 'delete',
    payload: {
        id: number
    }
}

type updateAction = {
    type: 'update',
    payload: TodoItem
}
type toggleStatusAction = {
    type: 'toggle',
    payload: {
        id: number
    }
}

export type taskReducerProps = addAction | updateAction | deleteAction | toggleStatusAction;