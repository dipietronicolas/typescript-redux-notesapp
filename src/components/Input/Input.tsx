import React, { useState, useRef } from 'react';
import { Flex, Input as ChakraInput, Button, FormControl } from '@chakra-ui/react';

type propsValues = {
  getInputData?(value: string): void
}
/*
const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  getInputData(e.target.value);
}
*/
const Input: React.FC<propsValues> = ({ getInputData = () => undefined }) => {

  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getInputData(inputValue);
    setInputValue('');
    if(inputRef.current !== null){
      inputRef.current.focus();
    }
  }

  return (
    <FormControl as="form" onSubmit={handleForm}>
      <Flex w="30rem" mx="auto">
        <ChakraInput
          size="md"
          ref={inputRef}
          value={inputValue}
          maxLength={50}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} 
          autoFocus />
        <Button type="submit" variant="outline" colorScheme="pink" >ADD NOTE</Button>
      </Flex>
    </FormControl>
  )
}

export default Input;
