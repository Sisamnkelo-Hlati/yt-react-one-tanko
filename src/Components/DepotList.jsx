import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TSOsList2 from './TSOsList2';

const DepotList = () => {
  return (
    <div className='flex items-center w-full h-full mb-3 overflow-hidden'>
    <div className='w-[30%] h-full p-4 flex flex-col items-center justify-center'>
      <h1 className='text-xl font-bold my-3'>Sisamnkelo Hlati</h1>
      <img src="/assets/cleaning2.jpg" className='w-[150px] h-[150px]  object-cover shrink-0 object-center rounded-lg ml-3' alt="" />
      <h1 className=' font-bold my-3'>3 Depots</h1>
      <button className=" text-sm border-0 outline-0 bg-[#009B00] text-white font-bold flex items-center gap-2"> <AddOutlinedIcon className= ' text-white font-bold text-sm'/>Add New Depot </button>
    </div>
    
    <div className='w-[70%] h-full p-4 overflow-y-scroll mb-3'>
      <h1 className='font-bold my-3 sticky z-20'>List of all Depots</h1>
      <div className='w-full '>
        
      <TSOsList2/>
      <TSOsList2/>
      <TSOsList2/>
      
      
      </div>
    </div>
    </div>
  )
}

export default DepotList