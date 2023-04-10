import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <button><Link to={'/pengaduan'}>click me</Link></button>
    </div>
  )
}

export default App
