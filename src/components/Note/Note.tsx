import React from 'react'
import { Flex, IconButton, Input } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { Note as NoteProps } from '../../reducers/notesReducer';

const Note: React.FC<NoteProps> = ({ note, id }) => {

  const [isInputLock, setIsInputLock] = React.useState<boolean>(true);
  const [inputValue, setInputValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Redux
  const dispatch = useDispatch();

  React.useEffect(() => {
    setInputValue(note);
  }, [note])

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }

  const handleDeleteButton = () => {
    dispatch({ type: 'DELETE_NOTE', payload: [null, id] })
  }

  const handleEditButton = () => {
    setIsInputLock(!isInputLock);
  }

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(inputRef.current){
      !isInputLock && inputRef.current.focus();
    }
    if(isInputLock){
      console.log(inputValue);
      dispatch({ type: 'UPDATE_NOTE', payload: [inputValue, id] })
    }
  }

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderWidth="3px"
      borderRadius="lg"
      p={6} my={3} as="form" onSubmit={handleFormSubmit} >
      <Input
        name="noteInput"
        value={inputValue}
        ref={inputRef}
        onChange={handleInputChange}
        w="80%"
        readOnly={isInputLock} />
      <IconButton
        w="3rem"
        aria-label="Delete note"
        icon={isInputLock ? <EditIcon /> : <CheckIcon />}
        colorScheme={isInputLock ? "yellow" : "green"}
        variant={isInputLock ? "outline" : "solid"}
        onClick={handleEditButton}
        type="submit" />
      <IconButton
        w="3rem"
        aria-label="Delete note"
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={handleDeleteButton} />
    </Flex>
  )
}

export default Note
