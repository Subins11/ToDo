import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import useForm from './Read';

const Todo = () => {

    var [todo,settodo] = useForm({toDo:"",quantity:"",description:""});

  return (
        
    <div>
      
      <Typography variant='h3'>TO-DO APP</Typography><br></br>
      <TextField name='toDo' value={todo.toDo} onChange={settodo} variant='outlined' label='TO-DO'>TODO</TextField><br></br><br></br>
      <TextField name='quantity' value={todo.quantity} onChange={settodo} variant='outlined' label='QUANTITY'>QUANTITY</TextField><br></br><br></br>
      <TextField name='description' value={todo.description} onChange={settodo} variant='outlined' label='DESCRIPTION'>DESCRIPTION</TextField><br></br><br></br>
      <br></br>
      <Button variant='contained' color='success'>SUBMIT</Button>
       
       <Typography variant='h6'>Name:{todo.toDo}</Typography>
       <Typography variant='h6'>Name:{todo.quantity}</Typography>
       <Typography variant='h6'>Name:{todo.description}</Typography>
    </div>
  )}


export default Todo
