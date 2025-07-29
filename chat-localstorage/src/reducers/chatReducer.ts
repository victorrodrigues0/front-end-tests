export type ChatType = {
    id: number,
    author: string,
    message: string
}

type AddAction = {
    type: "add",
    payload: Omit<ChatType, 'id'>
}

type InitAction = {
    type: "init",
    payload: ChatType[]
}

type ChatReducerActionsProps = AddAction | InitAction;

export const chatReducer = (list: ChatType[], actions: ChatReducerActionsProps) => {
    switch (actions.type) {
        case 'add':
            return [...list, {
                id: list.length,
                author: actions.payload.author,
                message: actions.payload.message
            }];
        case "init":
            return actions.payload;
        default:
            return list;
    }
}