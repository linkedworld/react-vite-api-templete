import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import api from './api/item'

function App() {
  useEffect(() => {
      api.characters().then( response => {
        console.log(response.data.data)      
      })
  }, [])

  return (
    <div className="App"></div>
  )
}

export default App
