
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const header = ()=>{
    return(
        <div className='w-full p-4 bg-gray-50 border-b border-gray-100 shadow-xl'>

           <div className='flex items-center justify-between px-2 '>
            <div>
                <Link to="/">
                <h1 className='font-bold text-3xl text-[#009B00]'>Tanko</h1>
                </Link>
            </div>
            <div className='bg-gray-100 py-2 px-4 rounded-full w-96 flex items-center justify-between'>
                <input className='bg-transparent' type="text" placeholder='Search tanko.....' />
                <SearchOutlinedIcon className= 'text-sm text-gray-500'/>
            </div>
            <div>Login</div>
           </div>

            
        </div>
    )
}


export default header