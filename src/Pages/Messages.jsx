import React from 'react'
import Header from '../Components/Header'
import MessageComponent from '../Components/MessageComponent'

const Messages = () => {
  return (
    <div className=' h-screen w-full overflow-hidden '>
        <Header/>

        <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
        
        <div className=' w-[1000px] mx-auto  mb-3 p-3' >
            
        <MessageComponent/>

        </div>
        
        </div>
    </div>
  )
}

export default Messages
