import React from 'react'
import Header from '../Components/Header'
import LeftBar from '../Components/LeftBar'
const Settings = () => {
  return (
    <div className=' h-screen w-full '>
        <Header/>

        <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
        <div className='w-[310px] p-4  sticky top-0 overflow-y-scroll bg-white visible-scrollBar'>
            <LeftBar />
        </div>
        <div className=' w-full mx-2 bg-gray-50 rounded-xl' >
            
        <h1>Hey Settings</h1>

        </div>
        
        </div>
    </div>
  )
}

export default Settings
