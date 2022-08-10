import React from 'react'
import { useState } from 'react'
import Id from '../Id'

export default function Input({setTodos, todos}) {
    const [title, setTitle]= useState('')
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    const handleClick= ()=>{
        console.log('input to change the global state')
        // setTodos(...todos, {title:title, id: Id()})
        setTodos([...todos,{title:title, id:Id()}])
        setTitle('')
    }
  return (
    <div>
      <input type="text" placeholder='Enter the todos' value={title} onChange={handleChange} />
      <button onClick={handleClick} >Add</button>
    </div>
  )
}
