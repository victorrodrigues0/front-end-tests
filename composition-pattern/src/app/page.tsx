"use client"


import React, { useState } from 'react'
import { ChevronDownCircle, Rocket, Search } from "lucide-react"
import { Card } from '@/components/card';

const Page = () => {
  const [name, setName] = useState('');

  return (
    <div className='w-full min-h-screen flex justify-center'>
      {/* <InputText.Root>
        <InputText.TextArea
          value={name}
          setChange={setName}
          placeholder='Pesquise...'
        />
        <InputText.ButtonSubmit
          buttonFn={() => { }}
        >
          <Search className='size-5' />
        </InputText.ButtonSubmit>
      </InputText.Root> */}

      <div>
        <Card.Root>
          <Card.Header>
            <Card.HeaderTitle>
              Card muito fodaa
            </Card.HeaderTitle>
            <Card.Icon>
              <ChevronDownCircle />
            </Card.Icon>
          </Card.Header>
          <Card.Body>
            <Card.BodyImage
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswwvA9WWb2e3ZfFOEMZHik4jQ9MgJGCEDbg&s'
              alt='Imagem de um gato'
            />
            <Card.BodyText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aut officia voluptate nemo, totam dolor consequuntur rerum quis, vitae neque iste quia. Aperiam nobis, quae aspernatur adipisci voluptatum minima doloribus?
            </Card.BodyText>
            <div className='w-full flex justify-center'>
              <Card.BodyButton>
                Visualizar
              </Card.BodyButton>
            </div>
          </Card.Body>
          <Card.Footer>
            <Card.FooterCreatedAt
              text=' Criado em 2021'
            />
          </Card.Footer>
        </Card.Root>
      </div>

    </div>
  )
}

export default Page;