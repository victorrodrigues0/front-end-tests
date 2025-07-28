import { TodoItem } from "@/types/todo/todo";

export const todoList: TodoItem[] = [
    { id: 1, title: "Comprar leite", completed: false, dueDate: new Date("2025-08-01") },
    { id: 2, title: "Fazer exercício", completed: true, dueDate: new Date("2025-07-28") },
    { id: 3, title: "Estudar React", completed: false, dueDate: new Date("2025-07-30") },
    { id: 4, title: "Limpar a casa", completed: false, dueDate: new Date("2025-07-29") },
    { id: 5, title: "Enviar relatório", completed: true, dueDate: new Date("2025-07-27") },
    { id: 6, title: "Ligar para o cliente", completed: false, dueDate: new Date("2025-08-02") },
    { id: 7, title: "Comprar presente", completed: false, dueDate: new Date("2025-08-05") },
    { id: 8, title: "Agendar reunião", completed: false, dueDate: new Date("2025-07-31") },
    { id: 9, title: "Responder e-mails", completed: true, dueDate: new Date("2025-07-26") },
    { id: 10, title: "Preparar jantar", completed: false, dueDate: new Date("2025-07-27") }
];
