"use client"
import React from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/ui/Button'
import { SendHorizonal, Shuffle } from 'lucide-react'
import random from '../../../utils/actions/random'

const Form = ({name}:{name:string}) => {
   const[input,setInput] = React.useState('' as string)
   const[res,setRes] = React.useState('' as string)
   const[data,setData] = React.useState('You can only catch the Pokémon if you guess its name correctly!' as string)
   console.log(name)
   const handleinput = (e:React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()
  setInput(e.target.value)
   }
   const handlesubmit = () => {
      if(name.toLocaleLowerCase() === input.toLocaleLowerCase()){
          setRes('Correct')
   }
   else{
       setRes('Incorrect')
       setData('You missed it! Try again')
   }
   }
  return (
<div className='flex-row md:flex  mt-[5%] '>
        <Input type="text" placeholder="Enter your Guess" onChange={(e)=>handleinput(e)} className="text-white"/>
       
       <div className='m-4 sm:m-0'>
       &nbsp;

       <Button variant="default" className="text-white " onClick={handlesubmit}><SendHorizonal/></Button>&nbsp; 
        
       </div>
       <div className='m-4 sm:m-0'>
       &nbsp;

       <Button variant="destructive" className="text-white " onClick={()=>random()} ><Shuffle/></Button>
        
       </div>
       <div>
      
       </div>
       
      <br/>
       
       
      </div>
)
}

export default Form