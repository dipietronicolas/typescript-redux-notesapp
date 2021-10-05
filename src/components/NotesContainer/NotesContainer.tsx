import React from 'react';
import Note from '../Note/Note';
// ChakraUI
import { Flex } from '@chakra-ui/react';
// Redux
import { useSelector } from 'react-redux';
import { NotesState } from '../../reducers/notesReducer';

const NotesContainer = () => {

  const notes = useSelector<NotesState, NotesState["notes"]>(state => state.notes);

  return (
    <Flex flexDirection="column" mt={12} w="50rem" mx="auto" >
      {
        notes.map(note => {
          return <Note key={note.id} { ...note } />
          
        })
      }
    </Flex>
  )
}

export default NotesContainer
