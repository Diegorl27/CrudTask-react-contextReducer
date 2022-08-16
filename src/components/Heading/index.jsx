import { Link } from "react-router-dom"
import {IoMdAdd} from 'react-icons/io'

export const Heading = ({ isEdit }) => {
  return (
    <div className='inline-flex justify-between'>
      <div className='flex items-center mb-10'>
        <h5 className='text-white font-bold text-2xl mr-36'>Task Crud whit context + reducer</h5>
          
        <div className='flex-grow text-right px-4 py-2 m-2'>
          {isEdit === false && 
            <Link to={'/form'}>
              <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
                <IoMdAdd />
                  Add Task
              </button>
            </Link>
          }
        </div>

      </div>
    </div>
  )
}
