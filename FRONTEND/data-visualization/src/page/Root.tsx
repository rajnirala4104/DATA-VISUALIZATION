import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components'

const Root: React.FC = () => {
   return (
      <>
         <div className='flex  w-full h-screen'>
            <SideBar />
            <Outlet />
         </div>
      </>
   )
}

export default Root