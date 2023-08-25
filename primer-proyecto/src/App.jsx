import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() { 

  return (
      <div>
        <NavBar/>
        <Titulo />
        <ItemListContainer saludo='Este es un saludo'/>
      </div>
  )
}

export default App
