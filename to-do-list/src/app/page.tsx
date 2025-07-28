"use client"

import { DatePickerWithInput } from '@/components/DatePickers/DatePickWithInput';
import { Modal } from '@/components/Modal';
import { TodoCard } from '@/components/ToDoCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { taskContext } from '@/context/task/taskContext';
import { todoList } from '@/data/toDoList/to-do-list';
import { taskReducer } from '@/reducers/taskReducer';
import { taskReducerProps } from '@/types/todo/taskReducer';
import { TodoItem } from '@/types/todo/todo';
import { Dialog } from '@radix-ui/react-dialog';
import { Label } from '@radix-ui/react-label';
import { todo } from 'node:test';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { toast, Toaster } from 'sonner';

const Page = () => {

  const [date, setDate] = React.useState<Date>(new Date())
  const [createTaskDescription, setcreateTaskDescription] = useState('');
  const [listToDo, dispatch] = useReducer(taskReducer, todoList);
  const [search, setSearch] = useState('');

  const filterToDo = search.length === 0 ? listToDo :
    listToDo.filter(item => item.title.includes(search));

  const handleCreateTask = () => {
    dispatch({
      type: "add",
      payload: {
        title: createTaskDescription,
        completed: false,
        dueDate: date
      }
    })

    toast("Task Criada", {
      description: `Task criada com sucesso.`,
      action: {
        label: "Feito",
        onClick: () => console.log("Toast confirmado"),
      },
    });
  }


  const handleToggleStatus = (id: number) => {
    dispatch({
      type: 'toggle',
      payload: {
        id
      }
    })
  }

  const handleOnDelete = (id: number) => {

    dispatch({
      type: 'delete',
      payload: {
        id
      }
    })

    toast("Task Deletada", {
      description: `Task Deletada com sucesso.`,
      action: {
        label: "Feito",
        onClick: () => console.log("Toast confirmado"),
      },
    });
  }
  const handleOnUpdate = (toDo: TodoItem) => {
    dispatch({
      type: 'update',
      payload: {
        id: toDo.id,
        title: toDo.title,
        completed: toDo.completed,
        dueDate: toDo.dueDate
      }
    })

    toast("Task Editada", {
      description: `Task Editada com sucesso.`,
      action: {
        label: "Feito",
        onClick: () => console.log("Toast confirmado"),
      },
    });

    

  }

  return (
    <taskContext.Provider value={{ date, setDate }}>
      <Toaster />
      <div className='max-w-screen min-h-screen flex pt-10 text-black flex-col items-center gap-5'>
        <div className='w-1/3 h-1/6 flex gap-6 justify-center '>
          <Input
            placeholder='Filtrar tarefa...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Modal
            btnText='Criar tarefa'
            titleText='Criar tarefa'
            classDeleteBtn='bg-red-500 text-white
          hover:bg-red-600 hover:text-white'
            btnFunction={handleCreateTask}
          >
            <div className="grid gap-3">
              <Label htmlFor="description">Descrição</Label>
              <Input id="description" name="description"
                value={createTaskDescription}
                onChange={(e) => setcreateTaskDescription(e.target.value)} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Dia da semana</Label>
              <DatePickerWithInput />
            </div>
          </Modal>
        </div>
        <div className='w-2/3 h-5/6  grid grid-cols-3 gap-5'>
          {filterToDo.map(item =>
            <div key={item.id} className='grid'>
              <TodoCard
                todo={item}
                onToggle={() => handleToggleStatus(item.id)}
                onDelete={() => handleOnDelete(item.id)}
                onUpdate={handleOnUpdate}
              />
            </div>
          )}
        </div>
      </div>
    </taskContext.Provider >
  )
}

export default Page;