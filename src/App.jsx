import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './components/Navigation/Navbar'


function App() {
  

  return (
    <div>
       
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Agence' element={<Agence />} />
          <Route path='/Project' element={<Project />} />
        </Routes>
     
    </div>
  )
}

export default App;
