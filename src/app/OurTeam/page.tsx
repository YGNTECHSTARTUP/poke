import { db } from '@/db/drizzle'
import { pokemons } from '@/db/schema'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import Image from 'next/image'
import { GridBackground } from '../comp/GridBackground'

const page = async () => {
    const res = await db.select().from(pokemons)
    const count=res.length
  console.log(res)
  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  return (
    <GridBackground>
        <div className='absolute top-0 text-white'>
        <div className=''>
            <h1 className="text-6xl font-bold text-balance text-center text-white opacity-100  underline">Our Pokémon Team</h1>   <br/> 
            <h1 className="text-4xl font-bold text-balance text-center text-white opacity-100  ">Together evryone has caught {count} Pokémons so far!</h1>    

        </div>
<div className='grid mx-auto justify-center p-[5%] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
            res.map(pokemon=>{
                return (
                    <Card key={pokemon.id}>
                        <CardHeader>
                            <CardTitle>{pokemon.named}</CardTitle>
                            <CardDescription>{pokemon.pokeid}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <Image 
                src={`${imageUrl}/${pokemon.pokeid}.png` }
              alt={`Pokemon ${pokemon.pokeid}`}
                width={200}
                height={200}
              />
                
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>
        </div>
        
    </GridBackground>
    
  )
}

export default page