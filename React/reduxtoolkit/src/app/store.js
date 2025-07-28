import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feachers/todos/todoslice'
export const store = configureStore({
    reducer : todoReducer
})

