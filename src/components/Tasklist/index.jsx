import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext'

export const Tasklist = ({ setEdit }) => {

 const {task, deleteTask} = useContext(GlobalContext)

  return (
      <div className='grid grid-cols-4 '>
        {task.map(task => (
          <div key={task.id} className='w-auto bg-purple-900 py-5 text-white shadow-2xl mb-4 mr-4 rounded-xl'>

            <div>
              
              <h6><strong>ID:</strong> {task.id}</h6>
              <div className='font-bold inline'>
                <h1>{task.title}</h1>
              </div>
                <br />
                <h6 className='font-bold'>Description</h6>
                <p className='flex w-40 m-auto'>{task.description}</p>
              <div className='mt-5 pb-5'>

                <Link to={`/edit/${task.id}`}>
                  <button
                    onClick={() => {
                      setEdit(true)
                    }}
                    className='bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold py-2 px-4 mr-3 rounded inline-flex'>
                    Edit
                  </button>
                </Link>

                <button 
                  onClick={()=>{
                    deleteTask(task.id)
                  }} 
                  className='bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-semibold py-2 px-4 rounded inline-flex'>
                  Delete
                </button>
              
              </div>
            </div>
          </div>
        ))}
      </div>
   
  )
}
