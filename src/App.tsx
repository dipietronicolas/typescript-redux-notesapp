import React from 'react';
import './App.css';
import { Box, Heading, Flex } from '@chakra-ui/react';
import Input from './components/Input/Input';
import { useDispatch } from 'react-redux';
import NotesContainer from './components/NotesContainer/NotesContainer';

function App() {

  // Redux
  const dispatch = useDispatch();

  // Input handler
  const getInputData = (value: string) => {
    dispatch({ type: 'ADD_NOTE', payload: [value, null] })
  }

  return (
    <Box minH="100vh" w="100%">
      <Flex p={12} justifyContent="center" alignItems="center">
        <Heading as="h2" size="2xl">
          notesApp
        </Heading>
      </Flex>
      <Input getInputData={getInputData} />
      <NotesContainer />
    </Box>
  );
}

export default App;
