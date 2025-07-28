import {createSlice,nanoid} from '@reduxjs/toolkit'
const initialState = {
    todos:[{id:1,text:'HelloWorld'}]
}

export const todoslice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodos:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }

})
export const {addTodos,removeTodos} = todoslice.actions
export default todoslice.reducer