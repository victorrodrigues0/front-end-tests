import { PostReducerActionsProps } from "@/types/post/postReducerActions"
import { Post } from "@/types/post/postType"

export const postReducer = (list: Post[], action: PostReducerActionsProps) => {
    switch (action.type) {
        case "add":
            return [...list, {
                id: list.length + 1,
                author: action.payload.author,
                content: action.payload.content
            }];
        case "delete":
            return list.filter(item => item.id !== action.payload.id);
        case 'init':
            return action.payload;

        default:
            return list;
    }
}