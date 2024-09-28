 
import React from 'react'
import NavBar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Entree from './components/Entree'

const HomePage = () => {
  return (
    <div className=' '>
      <NavBar/>
      <div className='flex'>
          <div className='p-4 '>
          <Sidebar/>
          </div>
          <div>
            <Entree/>
          </div>
      </div>
    </div>
  )
}

export default HomePage