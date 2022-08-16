import { createContext, useReducer } from 'react'
import appReducer from './AppReducer'

const INITIAL_TASK = {
  task:[
    {
      id: 1,
      title:'title one',
      description:'task',
      done: false
    },
    {
      id: 2,
      title:'title two',
      description:'task two',
      done: false
    }
  ]
}

 export const GlobalContext = createContext(INITIAL_TASK)

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, INITIAL_TASK)

  const addTask = (task) =>{
   return dispatch({ type:'ADD_TASK', payload:{
    title:task.title, 
    description:task.description, 
    id:state.task.length+1+Math.round(Math.random()*100), done:false} })
  }

  const deleteTask = (id) =>{
    return dispatch({ type:'DELETE_TASK', payload: id })
  }

  const editTask = (id, task) =>{
    return dispatch({type:'EDIT_TASK', payload: {
      id:id,
      title:task.title,
      description:task.description,
      done: false
    }})
  }

  return(
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, editTask }}>
      {children}
    </GlobalContext.Provider>
  )
}