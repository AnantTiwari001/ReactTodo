import React from 'react'

export default function list({todos,setTodos}) {
    var lists
    const changeList=(dId)=>{
        lists= [...todos]
        lists.map((list, index)=>{
            if (list.id==dId) {
                lists.splice(index,1)
                return lists
            }
        })
    }
    const handleDelete=(dId)=>{
        let a= changeList(dId)
        setTodos(lists)
        console.log(a)
    }
  return (
    <div>
      {todos.map((todo)=>{
        return (
            <li key={todo.id}>
                <h2>{todo.title} </h2>
                <button onClick={()=> handleDelete(todo.id)}>Delete</button>
            </li>
        )
      })}
    </div>
  )
}
