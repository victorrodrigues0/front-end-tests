import { taskReducerProps } from "@/types/todo/taskReducer";
import { TodoItem } from "@/types/todo/todo";


export const taskReducer = (list: TodoItem[], actions: taskReducerProps) => {
    switch (actions.type) {
        case "add":
            return [
                ...list,
                {
                    id: list.length + 2,
                    title: actions.payload.title,
                    completed: false,
                    dueDate: actions.payload.dueDate
                }
            ]
        case "update":
            return list.map(item => {
                if (item.id === actions.payload.id) {
                    return {
                        ...item,
                        title: actions.payload.title,
                        completed: actions.payload.completed,
                        dueDate: actions.payload.dueDate
                    }
                } return item;
            });
        case "toggle":
            return list.map(item => {
                if (item.id === actions.payload.id) {
                    return { ...item, completed: !item.completed }
                }

                return item;
            })
        case "delete":
            return list.filter(item => item.id !== actions.payload.id);
        default:
            return list;
    }
}