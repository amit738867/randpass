import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
        todos:[
            {
            id:1,
            todo:'Todo Title',
            completed: false
        }
    ],
    addTodo:(todo) => {},
    removeTodo:(id) => {},
    updateTodo:(id, updatedTodo)=>{},
    toggleTodo:(id) => {}
}) 

export const TodoProvider = TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}

