
import { Button } from '@/components/ui/button'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-40 py-4 bg-white shadow-md'>
        <h1 className='text-l'><span className='text-4xl font-extrabold'>L</span>agbouri</h1>
        <Button>Connexion</Button>
    </div>
  )
}

export default NavBar