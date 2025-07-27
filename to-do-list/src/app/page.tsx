"use client"

import { ButtonApp } from "@/components/Button";
import { City } from "@/components/City";
// import { Modal } from "@/components/Modal";
import { Person } from "@/components/Person";
import { Rating } from "@/components/Rating";
import { User, users } from "@/data/usersList";
import { ButtonHTMLAttributes, FormEvent, MouseEventHandler, useState } from "react";

const Page = () => {


  const handleBtn = () => {
    alert('salve');
  }

  const handleVisualizar = () => {
    alert("Viu");
  }

  const handleformSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("enviou");
  }

  const handleToggleModal = () => {
    setModal(!modal);
  }

  const [modal, setModal] = useState(false);

  const [search, setSearch] = useState<string>('');
  const [list, setList] = useState<User[]>(users);
  const [nameUser, setNameUser] = useState('');
  const [userId, setUserId] = useState(0);
  const [fieldNameUser, setFieldNameUser] = useState(false);

  const usersFilter = list.filter(user => user.name.includes(search));

  const handleDeletar = (id: number) => {
    setList(list.filter(Element => Element.id !== id));
  }
  const handleEditar = (id: number, name: string) => {
    setList(list.map(e => e.id === id ? { ...e, name: name } : e));
  }
  const handleEditarInput = (id: number) => {
    setFieldNameUser(true);
    setUserId(id)
  }
  return (
    <div className="w-full h-full bg-amber-900 flex justify-center items-center gap-6 flex-col">


      <input
        type="text"
        placeholder="Insira um nome"
        className="border border-black bg-white"
        onChange={e => (setSearch(e.target.value))}
      />

      {fieldNameUser &&
        <div>
          <input
            type="text"
            placeholder="Insira um nome"
            className="border border-black bg-white"
            onChange={e => (setNameUser(e.target.value))}
          />
          <button className="p-2 bg-red-300" onClick={() => handleEditar(userId, nameUser)}>editar</button>
        </div>
      }



      <div className="flex flex-col gap-8">
        {search == '' &&

          list.map(e =>
            <div key={e.id} className="flex gap-3">
              <p>{e.name}</p>
              <button className="p-2 bg-red-300" onClick={() => handleDeletar(e.id)}>deletar</button>
              <button className="p-2 bg-red-300" onClick={() => handleEditarInput(e.id)}>editar</button>
            </div>

          )}

        {search !== '' &&

          usersFilter.map(e =>
            <div key={e.id}>
              <p>{e.name}</p>
              <ButtonApp
                text="Excluir"
              // click={ }
              />
            </div>

          )}
      </div>

      {/* <p>
        {search}
      </p> */}


      {/* <ButtonApp
        color="bg-red-900"
        text="Abrir modal"
        click={ handleToggleModal}
      />

      {modal &&
        <Modal
        closeModal={handleToggleModal}
        />
      } */}


      {/* <h1>Bem vindo</h1>

      <Person
        name="Victor"
        age={18}
        height={29.9}
        gender="Masculino"
      />

      <br /><br />

      {users.map(user =>
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      )}
      <br />
      <br />
      <br />

      {usersFilter.map(user =>
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      )}
         */}

      {/* <Rating
      rate={2}
      /> */}

      {/* <ButtonApp
        text="Visualizar"
        click={handleVisualizar}
      />

      <ButtonApp
        text="Editar"
        color="bg-yellow-500"
        click={handleEditar}
      />

      <ButtonApp
        text="Excluir"
        color="bg-red-500"
        click={handleDeletar}
      />

      <form action="" onSubmit={handleformSubmit}>
        <input type="text" className="p-4 bg-white" name="" id="" />
        <ButtonApp
          text="Enviar"
          color="bg-sky-300"
        />
      </form> */}



    </div >
  )
}

export default Page;