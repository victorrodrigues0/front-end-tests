import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Pen, Pencil, Trash } from "lucide-react";
import { TodoItem } from "@/types/todo/todo";
import { cn } from "@/lib/utils";
import { Modal } from "./Modal";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { DatePickerWithInput } from "./DatePickers/DatePickWithInput";
import { useEffect, useState } from "react";

interface TodoCardProps {
    todo: TodoItem;
    onToggle: (id: number) => void,
    onDelete: (id: number) => void,
    onUpdate: (toDo: TodoItem) => void
}

export const TodoCard = ({ todo, onToggle, onDelete, onUpdate }: TodoCardProps) => {
    const isOverdue = new Date(todo.dueDate) < new Date() && !todo.completed;
    const isDueToday = new Date(todo.dueDate).toDateString() === new Date().toDateString();
    const [fieldText, setFieldText] = useState(todo.title);
    const [editDate, setEditDate] = useState(todo.dueDate);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <Card className={cn(
            "transition-all duration-200 hover:shadow-md",
            todo.completed && "opacity-70",
            isOverdue && "border-destructive"
        )}>
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => onToggle(todo.id)}
                        className="mt-1"
                    />

                    <div className="flex-1 space-y-2">
                        <h3 className={cn(
                            "font-medium text-foreground",
                            todo.completed && "line-through text-muted-foreground"
                        )}>
                            {todo.title}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(todo.dueDate.toDateString())}</span>

                            {isOverdue && (
                                <Badge variant="destructive" className="ml-2">
                                    <Clock className="h-3 w-3 mr-1" />
                                    Atrasado
                                </Badge>
                            )}

                            {isDueToday && !todo.completed && (
                                <Badge variant="secondary" className="ml-2">
                                    Hoje
                                </Badge>
                            )}

                            {todo.completed && (
                                <Badge variant="outline" className="ml-2 text-emerald-600 border-emerald-600">
                                    Concluído
                                </Badge>
                            )}

                        </div>
                        <div className="w-full flex justify-end pr-5 cursor-pointer gap-1">
                            <Badge variant="destructive" className="p-2 px-3"
                                onClick={() => onDelete(todo.id)}
                            >
                                <Trash className="h-3 w-3" />
                            </Badge>
                            <Modal
                                titleText="Editar Tarefa"
                                description="Edite sua tarefa"
                                btnFunction={() => onUpdate({
                                    ...todo,
                                    title: fieldText,
                                    dueDate: editDate
                                })}
                            >
                                <div className="grid gap-3">
                                    <Label htmlFor="description">Descrição</Label>
                                    <Input id="description" name="description"
                                        value={fieldText}
                                        onChange={(e) => setFieldText(e.target.value)} />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="">Dia da semana</Label>
                                    <DatePickerWithInput
                                        dateToDo={editDate}
                                        onDateChange={setEditDate}
                                    />
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};