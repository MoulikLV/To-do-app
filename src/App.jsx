import { useEffect, useRef, useState } from "react";
import "./App.css";
import Inputcontainer from "./components/Inputcontainer";
import TodoContainer from "./components/TodoContainer";


function App() {

  const [value,setValue]=useState('')

  const [todos,setTodos]=useState([])

  const inputref=useRef()

  const handleInput=(e)=>{
      setValue(e.target.value)
  }

  const addTodo=()=>{
     if(value!==""){
      setTodos((prevTodo)=>[...prevTodo , value])
      setValue('')
      if(inputref.current){
        inputref.current.focus();
      }
     }
    
  }

  const handlekey=(e)=>{
    if(e.key==="Enter"){
      addTodo();
    }
  }


  const deleteTodo=(todoIndex)=>{
    const updatedTodos= todos.filter((_,index)=> index!==todoIndex)
    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)
   
  }

  const updateLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // console.log("To do Array:",todos)

  useEffect(()=>{
       
      if(todos.length>0){
        localStorage.setItem('todos',JSON.stringify(todos))
      }
    
  },[todos])

  useEffect(()=>{
    inputref.current.focus();
    const storedTodos= localStorage.getItem('todos')
    console.log("stored todos:",storedTodos)
    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    
    }
  },[])



  return (
    <>
      <main>
        <h2>To Do List</h2>

        <Inputcontainer value={value}  handleInput={handleInput} addTodo={addTodo} inputref={inputref} handlekey={handlekey}  />
        <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
      </main>
    </>
  );
}

export default App;
