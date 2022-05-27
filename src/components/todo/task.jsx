import { 
  Button,
  ButtonGroup,
  Icon,
  Checkbox,
  Box,
  Container
} from '@chakra-ui/react'

import { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import EditTodo from './edit.jsx'

const Task = (props) => {
  const {task, handleDelete, toggleComplete, handleEdit} = props 
  const [edit, setEdit ] = useState(false)

  return (
    <Box 
      w="100%"
    >
      <Container
        display='flex' 
        direction={'row'} 
        spacing={2}
        alignItems='center'
      >
        {
          edit ?
            <EditTodo
              handleEdit={handleEdit}
              id={task.id}
              setEdit={setEdit}
            />
          :
          <>
            <Checkbox 
              onChange={() => toggleComplete(task.id)} 
              defaultChecked={task.completed}
              />
            <Box 
              pl={4}
              align="left"
              className={task.completed ?  'completed' : 'uncompleted' } 
              w="100%"
              onDoubleClick={() => setEdit(!edit)}
              >
              {task.name} 
            </Box>
            <ButtonGroup size='sm' isAttached >
              <Button  onClick={() => handleDelete(task.id)}> <Icon as={DeleteIcon}/> </Button>
              <Button onClick={() => setEdit(true)}> <Icon as={EditIcon}/> </Button>
            </ButtonGroup>
          </>
        }
      </Container>
    </Box>
  )
}

export default Task
