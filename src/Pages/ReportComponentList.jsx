import React from 'react'
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const ReportComponentList = () => {
  return (
    
    <div className='flex items-start gap-2 mt-4'>
        <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full mt-3' alt="" />
        <div className='flex flex-col gap-1'>

            <div className= 'flex items-center justify-between'>
            <span>bp Sisamnkelo Hlati</span>
            <MoreVertOutlinedIcon/>

            </div>
            <div className='flex flex-col gap-3 mb-3 bg-gray-50 rounded-lg border border-gray-100 p-3'>
            <div className='flex items-center gap-4'>
              <span className=' p-3 flex items-center justify-center rounded-lg bg-white '><PermContactCalendarOutlinedIcon className= 'text-gray-600' /></span>
                 
                 <span className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>2 days ago</span>
                 
            </div>

            
            <div className='flex items-center gap-4'>
            <span className=' p-3 flex items-center justify-center rounded-lg bg-white '><PermContactCalendarOutlinedIcon className= 'text-gray-600' /></span>
                 <div className='flex items-center gap-4'>
                  <span className= ' font-semibold py-2 px-4 border border-gray-100 rounded-lg  bg-white'>Sales</span>

                  <ul className='flex items-center gap-4'>
                    
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 95: <span className= '  text-xl font-semibold text-[#98CE00] ' >56000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 93: <span className= '  text-xl font-semibold text-[#98CE00] '>66000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>D50: <span className= '  text-xl font-semibold text-[#98CE00] '>456000</span></li>
                    
                  </ul>
                 </div>
                 
            </div>
            <div className='flex items-center gap-4'>
            <span className=' p-3 flex items-center justify-center rounded-lg bg-white '><PermContactCalendarOutlinedIcon className= 'text-gray-600' /></span>
                 <div className='flex items-center gap-4'>
                  <span className= ' font-semibold py-2 px-4 border border-gray-100 rounded-lg  bg-white'>Deliveries</span>

                  <ul className='flex items-center gap-4'>
                    
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 95: <span className= '  text-xl font-semibold text-[#98CE00] ' >56000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 93: <span className= '  text-xl font-semibold text-[#98CE00] '>66000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>D50: <span className= '  text-xl font-semibold text-[#98CE00] '>456000</span></li>
                    
                  </ul>
                 </div>
                 
            </div>
            <div className='flex items-center gap-4'>
            <span className=' p-3 flex items-center justify-center rounded-lg bg-white '><PermContactCalendarOutlinedIcon className= 'text-gray-600' /></span>
                 <div className='flex items-center gap-4'>
                  <span className= ' font-semibold py-2 px-4 border border-gray-100 rounded-lg  bg-white'>Opening Dip</span>

                  <ul className='flex items-center gap-4'>
                    
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 95: <span className= '  text-xl font-semibold text-[#98CE00] ' >56000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 93: <span className= '  text-xl font-semibold text-[#98CE00] '>66000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>D50: <span className= '  text-xl font-semibold text-[#98CE00] '>456000</span></li>
                    
                  </ul>
                 </div>
                 
            </div>
            <div className='flex items-center gap-4'>
            <span className=' p-3 flex items-center justify-center rounded-lg bg-white '><PermContactCalendarOutlinedIcon className= 'text-gray-600' /></span>
                 <div className='flex items-center gap-4'>
                  <span className= ' font-semibold py-2 px-4 border border-gray-100 rounded-lg  bg-white'>Closing Dip</span>

                  <ul className='flex items-center gap-4'>
                    
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 95: <span className= '  text-xl font-semibold text-[#98CE00] ' >56000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>ULP 93: <span className= '  text-xl font-semibold text-[#98CE00] '>66000</span></li>
                    <li className= ' font-medium py-2 px-4 border border-gray-100 rounded-lg bg-white'>D50: <span className= '  text-xl font-semibold text-[#98CE00] '>456000</span></li>
                    
                  </ul>
                 </div>
                 
            </div>
            </div>
          </div>  

    </div>
  )
}

export default ReportComponentList
