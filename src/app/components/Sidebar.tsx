import React from 'react'
import { Button } from '@/components/ui/button'
const Sidebar = () => {
  return (
    <div className='flex flex-col space-y-4'>
        <Button className='py-4'>Mes Citernes</Button>
        <Button className='py-4'>Mes Entrees</Button>
        <Button className='py-4'>Mes Sorties</Button>
        <Button className='py-4'>Mes Recylages</Button>
    </div>
  )
}

export default Sidebar