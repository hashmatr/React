import React, {useState,useEffect} from 'react'
import './index.css'
import { TodoContextProvider } from './Context'
import { TodoForm,Todoitems } from './components'
const App = () => {
  const [todos,setTodos] = useState([]);
  const addTodo = (todo) =>{
  setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }
  const editTodo = (id,todo) => {
    setTodos((prevTodo)=> (prevTodo.map((prevTodo) => prevTodo.id === id ?{...prevTodo,todo}:prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodos((prev) => (prev.filter((todo) => todo.id!==id)))
  }
  const todoCompleted = (id) => {
    setTodos((prevTodo) => (prevTodo.map((prevTodo)=>(prevTodo.id === id ?{...prevTodo,completed:!prevTodo.completed }: prevTodo))))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
 <TodoContextProvider value={{todos,addTodo,deleteTodo,editTodo,todoCompleted}}>
     <div className="bg-[#172842] min-h-screen py-8">
     <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
     <div className="mb-4">
          <TodoForm/> 
         </div>
         <div className="flex flex-wrap gap-y-3">
           {todos.map((todo)=>(
            <div className='w-full' key={todo.id}><Todoitems todo={todo}/></div>
           ))}
           
     </div>
     </div>
     </div> 
 </TodoContextProvider>         
             )
}

export default App