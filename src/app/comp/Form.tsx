'use client';
import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/ui/Button';
import { SendHorizonal, Shuffle, ThumbsDown, ThumbsUp } from 'lucide-react';
import random from '../../../utils/actions/random';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/Dialog';
import insertpoke from '@/db/scripts/insertpoke';
import { DialogClose } from '@radix-ui/react-dialog';

interface FormProps {
  name: string;
  pokeid: number;
}

const Form: React.FC<FormProps> = ({ name, pokeid }) => {
  const [input, setInput] = useState('');
  const [res, setRes] = useState('');
  const [data, setData] = useState('Please guess the Pokémon name!');
  const [personpoke, setPerson] = useState('Admin');
  const person= personpoke;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(e.target.value);
  };

  const handleSubmit = () => {
    if (name.toLowerCase() === input.toLowerCase()) {
      setRes('Correct');
      setData(`Gotcha! You caught the ${name}`);
      setInput('');
    } else {
      setRes('Incorrect');
      setData('You missed it! Try again');
      setTimeout(() => random(), 1000); // Delay random action for 1 second
      setInput('');
    }
  };

  const handleInsertPoke = async () => {
  if(!person) return alert('Please enter your name')
  setTimeout(() => console.log(name), 1000); 
  insertpoke({ pokeid, name, person })
  setPerson('')
  };

  return (
    <div className="md:flex text-center mx-auto justify-center">
      <div className="flex-row md:flex mt-5">
        <Input
          type="text"
          placeholder="Enter your Guess"
          value={input}
          onChange={handleInput}
          className="text-white"
        />
        <div className="flex m-4 md:m-0">
          <div className="sm:m-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="text-white" onClick={handleSubmit}>
                  <SendHorizonal />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] text-white">
                {res === 'Correct' ? (
                  <div>
                    <ThumbsUp size={24} />
                    <span>{data}</span>
                    <Input
                      type="text"
                      placeholder="Enter your Name"
                      onChange={handleName}
                      className="text-white"
                    />
                    <DialogClose asChild>
                      <Button variant="default" className="text-white" onClick={handleInsertPoke}>
                        Submit
                      </Button>
                    </DialogClose>
                  </div>
                ) : (
                  <div>
                    <ThumbsDown size={24} />
                    <span>{data}</span>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
          <div className="sm:m-0">
            &nbsp;
            <Button variant="destructive" className="text-white" onClick={() => random()}>
              <Shuffle />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
