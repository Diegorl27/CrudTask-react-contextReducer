import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='h- w-screen bg-violet-700'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)
