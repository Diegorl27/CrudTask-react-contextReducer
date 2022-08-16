import { Heading } from './components/Heading'
import { Routes, Route } from 'react-router-dom'
import { Tasklist } from './components/Tasklist'
import { Taskform } from './components/Taskform'
import { ContextProvider } from './context/globalContext'
import { useState } from 'react'

function App() {

  const [isEdit, setEdit] = useState(false)

  return (
    <div>
      <div className='text-center bg-violet-600  h-24'>
        <Heading isEdit={isEdit} />
      </div>
      <div className="h-screen text-white text-center p-10">
        <div className='container mx-auto'>
            
            <ContextProvider>
              <Routes>
                  <Route path='/' element={<Tasklist setEdit={setEdit} />} />
                  <Route path='/form' element={<Taskform setEdit={setEdit} />} />
                  <Route path='/edit/:id' element={<Taskform isEdit={isEdit} setEdit={setEdit} />} />
              </Routes>
            </ContextProvider>
        </div>
      </div>
    </div>
  )
}

export default App
