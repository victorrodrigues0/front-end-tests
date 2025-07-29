"use client"


import { TextAreaInput } from '@/components/inputText/InputTextArea';
import React, { useState } from 'react'
import { ChevronDownCircle, Rocket, Search } from "lucide-react"
import { InputText } from '@/components/inputText';
import { CardRoot } from '@/components/card/CardRoot';
import { Card } from '@/components/card';

const Page = () => {
  const [name, setName] = useState('');

  return (
    <div className='w-full flex justify-center pt-10 '>
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
        </Card.Body>

        <Card.Footer>
          a
        </Card.Footer>
      </Card.Root>
    </div>
  )
}

export default Page;