import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext'

const INITIAL_STATE ={
  title: '',
  description: ''
}

export const Taskform = ({ isEdit, setEdit }) => {

  const { task, addTask, editTask } = useContext(GlobalContext)
  const [tasks, setTask] = useState(INITIAL_STATE)
  const navigate = useNavigate()
  const params = useParams()

  const id = parseInt(params.id)
  let taskFound = []

  useEffect(()=>{
    taskFound = task.find(task => task.id === id)
    if(taskFound && params.id){
      setTask(taskFound)
    }
  },[params])

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setTask({...tasks,[name]:value })
  } 

  const handleSubmit =  (evt) => {
    evt.preventDefault()
    if (id > 0 && tasks.title !== '' && tasks.description !== '') {

      editTask(id, tasks)
      navigate('/')
      setTask([INITIAL_STATE])
      taskFound = INITIAL_STATE

    }else if(tasks.title !== '' && tasks.description !== ''){

      addTask(tasks)
      navigate('/')
      setTask([INITIAL_STATE])
      taskFound = INITIAL_STATE

    }else{
      alert('Title and name are required')
    }
  }
  


  return (
    <div className='flex justify-center items-center h-3/4'>
      <form className='bg-green-500 p-10' onSubmit={handleSubmit}>
        <h2 className='mb-7 text-3x1 font-bold'>
          {isEdit === true 
            ?('Edit Task')
            :('Add Task')
          }
        </h2>
        
        <div className='mb-5'>
          <input 
            className='text-gray-600 py-3 px-4 focus:outline-none focus:text-gray-900 w-full' 
            type="text" 
            name='title'
            value={tasks.title} 
            placeholder='Write a title'
            onChange={handleChange}
          />
        </div>

        <div className='mb-5'>
          <textarea 
            className='text-gray-600 py-3 px-4 focus:outline-none focus:text-gray-900 w-full'
            name='description'
            value={tasks.description} 
            rows={2} 
            placeholder='write the description'
            onChange={handleChange}
          />
        </div>

        <div className='flex justify-around'>
          <button
            onClick={() => {
              setEdit(false)
            }}
            type='submit'
            className='bg-violet-700 hover:bg-violet-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
            Save
          </button>                         
        
          <Link to='/'>
            <button
              onClick={() => {
                setEdit(false)
              }}
              className='bg-violet-700 hover:bg-violet-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
                Cancel
            </button>    
          </Link>                 
        </div>
      </form>
    </div>
  )
}
