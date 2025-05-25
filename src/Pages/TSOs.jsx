import React from 'react'
import Header from '../Components/Header'
import DataTable from '../Components/DataTable'
import LeftBar from '../Components/LeftBar'



const TSOs = () => {
  return (
    <div className=' h-screen w-full '>
                                   <Header/>
                
                            <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
                                <div className='w-[310px] p-4  sticky top-0 overflow-y-scroll bg-white visible-scrollBar'>
                                    < LeftBar />
                                </div>
                                <div className=' w-full p-3 bg-gray-50 rounded-xl' >
                                  <div className='py-2 flex items-center justify-between mb-5'>
                                    <h1 className='text-xl text-[#009B00] font-bold'>List of All TSOs</h1>
                                    <button className='bg-[#009B00] px-4 py-2 font-bold text-white'>Add New TSO</button>
                                  </div>
                                    <DataTable/>
                                   
                              
                                </div>
                                
                            </div>
    </div>
    
  )
}

export default TSOs