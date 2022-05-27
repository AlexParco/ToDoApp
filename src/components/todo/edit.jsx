import { SmallCloseIcon } from '@chakra-ui/icons'
import {
  FormControl,
  Input,
  Button,
  InputRightAddon,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'

import { useState } from 'react'

const EditTodo = props => {
  const { handleEdit, id, setEdit } = props
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim() !== ''){
      handleEdit(id, input)
    }
    setEdit(false)
  }

  return (
    <>
      <FormControl as="form" onSubmit={e => handleSubmit(e)} >
        <InputGroup size='sm'>
            <Input 
              variant='outline'
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
        </InputGroup>
      </FormControl>
      <Button size='sm' variant='ghost' bg="none" children={ <SmallCloseIcon/> } onClick={() => setEdit(false)}/>
    </>
  )
}

export default EditTodo
