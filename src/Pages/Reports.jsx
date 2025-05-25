import React from 'react'
import Header from '../Components/Header'
import DataTable from '../Components/DataTable'
import LeftBar from '../Components/LeftBar'

const Reports = () => {
  return (
    <div className=' h-screen w-full '>
        <Header/>

        <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
        <div className=' w-[310px] p-4  sticky top-0 overflow-y-scroll bg-white visible-scrollBar'>
            <LeftBar />
        </div>
        <div className=' w-full mx-2 bg-gray-50 rounded-xl overflow-y-scroll' >

          <div className=' w-full p-3 bg-gray-50 rounded-xl' >
                  <div className='py-2 mb-5'>
                      <h1 className='text-xl text-[#009B00] font-bold'>Master Site List</h1>
                                              
                   </div>
                <DataTable/>
                                             
                                        
           </div>
      

        </div>
        
        </div>
    </div>
  )
}

export default Reports
