import {useContext,createContext} from 'react'

export const TodoContext = createContext({
     todos : [
      {
        id:1,
        completed:false,
        todo: "todomsg"
      }
     ],
     addTodo: (todo) => {},
     deleteTodo: (id) => {},
     todoCompleted: (id) => {},
     editTodo : (id,todo) => {  }
})
export const useTodo = () => {
     return useContext(TodoContext)
}
export const TodoContextProvider = TodoContext.Provider