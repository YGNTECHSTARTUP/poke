import React from 'react'
import { Canvas } from './comp/Canvas'
import { GridBackground } from './comp/GridBackground'
import Link from 'next/link'
import Form from './comp/Form'
import { revalidatePath } from 'next/cache'


const page = async () => {
  let id;
  let name
  do {
      id = Math.floor(Math.random() * 1000 + 1);
      console.log(id);
      try{
        name = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()).then(res => res.name)
      }
      catch(e){
         revalidatePath('/')
      }

  } while (id === 0);

  return (
    <div>
      <GridBackground>
        <div className='block '>
        <h1 className="text-4xl font-bold text-balance text-center text-white opacity-100  ">        Catch&apos;em all! 

      </h1>
      <br/>
      <div className='text-white text-center text-balance'>
        <Link href="/" className='underline'>Home</Link>
        |
        <Link href="/team">OurTeam</Link>
      </div>
      <Canvas randomPokemonId={id}/>
      <Form name={name}/>
      
        </div>
      

      </GridBackground>
    </div>
  )
}

export default page