import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import List from './components/List'
import { useState } from 'react';
import Id from './Id.js'

function App() {
  const [todos, setTodos]= useState([{title:'hello world what is up friends', id:Id()}])
  return (
    <div>
    <Title/>
    <Input todos={todos} setTodos={setTodos} />
    <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
