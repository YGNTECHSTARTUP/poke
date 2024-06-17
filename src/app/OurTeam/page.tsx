import { db } from '@/db/drizzle'
import { pokemons } from '@/db/schema'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card'
import Image from 'next/image'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
export const dynamic = "force-dynamic";
async function  getpoke() {
    const res = db.select().from(pokemons)
    return res
   }
const page =  async() => {
   
    let res = await getpoke()
    res = res.reverse()
    console.log(res)

  const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  return (
    
        <div className='absolute top-0 text-white bg-black min-w-full'>
        <Link href="/" className='underline'>  
        
        <MoveLeft size={100}/>
              
        </Link>
        <div className=''>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-balance text-center text-white opacity-100  underline">Our Pokémon Team</h1>   <br/> 
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-balance text-center text-white opacity-100  ">Together evryone has caught {res.length} Pokémons so far!</h1>    

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
                       <CardFooter>
                        <CardDescription>Caught By:<span className='text-yellow-600'>
                            {
                        pokemon.caughtby || '-'

                            }
                            </span></CardDescription>
                       </CardFooter>
                    </Card>
                )
            })
        }
    </div>
        </div>
        
    
    
  )
}

export default page