import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function Homebottomtext() {
  return (
    <div className='font-[font1] text-[6vw] gap-[1vw] justify-center w-full   flex mt-[9vw]'>
      <div className=' hover:border-green-400 hover:text-green-400 rounded-full h-[7vw] w-[25vw] flex border-4  font-extrabold justify-center'>
      <Link  className='mt-[-10px]' to='/Project' >WORK</Link>

      </div>
      <div className=' rounded-full hover:border-green-400 hover:text-green-400 h-[7vw]  w-[30vw]  border-4 flex justify-center font-bold'>
        <Link to='/Agence' className='mt-[-10px]'>AGENCE</Link>
      </div>
      
    
 
    </div>
  )
}

export default Homebottomtext