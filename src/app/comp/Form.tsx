"use client"
import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/ui/Button';
import { SendHorizonal, Shuffle, ThumbsDown, ThumbsUp } from 'lucide-react';
import random from '../../../utils/actions/random';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/Dialog';

interface FormProps {
  name: string;
}

const Form: React.FC<FormProps> = ({ name }) => {
  const [input, setInput] = useState('');
  const [res, setRes] = useState('');
  const [data, setData] = useState('Please guess the Pokémon name!');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (name.toLowerCase() === input.toLowerCase()) {
      setRes('Correct');
      setData(`Gotcha! You caught the ${name}`);
      setTimeout(() => random(), 3000); // Delay random action for 3 seconds
      setInput('');
    } else {
      setRes('Incorrect');
      setData('You missed it! Try again');
      setTimeout(() => random(), 1000); // Delay random action for 1 second
      setInput('');
    }
  };

  return (
    <div className='md:flex text-center mx-auto justify-center'>
      <div className='flex-row md:flex mt-5'>
        <Input type="text" placeholder="Enter your Guess" value={input} onChange={handleInput} className="text-white" />
        <div className='flex m-4 md:m-0'>
          <div className='sm:m-0'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="text-white" onClick={handleSubmit}>
                  <SendHorizonal />
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px] text-white'>
                {res === 'Correct' ? (
                  <div>
                    <ThumbsUp size={24} />
                    <span>{data}</span>
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
          <div className='sm:m-0'>
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
