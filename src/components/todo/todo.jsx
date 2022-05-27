import { useState } from 'react'
import Task from './task.jsx'
import uuid from 'react-uuid'
import {
  Box,
  Button,
  Container ,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useColorMode,
} from '@chakra-ui/react'

import { useTasks } from '../../Hooks/useTasks.jsx'

const ToDo = () => {
  const { toggleColorMode } = useColorMode()
  const {tasks, setTasks} = useTasks()
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim() !== ''){
      setTasks([...tasks, {id:  uuid(), name: input, completed: false}])
    }
    setInput('')
  }

  const handleDelete = (id) => { 
    setTasks(tasks.filter(e => e.id !== id))
  }

  const handleEdit = (id, nInput) => {
    const updateTasks = tasks.map(task => {
      if(task.id == id){ 
        return {...task, name: nInput}
      }
      return task
    })

    setTasks(updateTasks)
  }

  
  const toggleComplete = (id) => {
    const updateTasks = tasks.map(task => {
      if(task.id == id){ 
        return {...task, completed: !task.completed }
      }
      return task
    })

    setTasks(updateTasks)
  }

  return (
    <Box
      w="100%"
      mt={8}
    >
      <Container
        maxW="md"
        p={5}
        align="center"
        justify="space-between"
      >
        <Heading>Todo App</Heading>
        <FormControl as="form" mt={6} onSubmit={e => handleSubmit(e)}>
          <InputGroup>
            <Input 
              variant='flushed'
              type="text"
              onChange={e => setInput(e.target.value)}
              value={input}
            />
          </InputGroup>
        </FormControl>
        <Stack
          mt={10}
          spacing={2}
        >
          {
            tasks.map((task) => 
              <Task
                key={task.id}
                task={task}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
                handleEdit={handleEdit}
              />
            )
          }
        </Stack>
      </Container>
    </Box>
  )
}

export default ToDo
