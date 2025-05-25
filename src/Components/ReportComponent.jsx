import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReportComponentList from './ReportComponentList';

const ReportComponent = () => {
  return (
    <div className='py-2 px-3'>
      <div className='w-full'>
        <div className='w-full border-b border-gray-300 p-2'>
          <ul className='flex gap-4 items-center font-medium '>
            <li>All</li>
            <li>Consignment</li>
            <li>Non Consignment</li>
            <li>Master Site List</li>
          </ul>

        </div>
        
        <button className="py-1 px-2 text-xs border border-[#009B00] outline-0 mt-4  text-[#009B00] font-bold flex items-center gap-1"> Date <KeyboardArrowDownOutlinedIcon className='text-sm'/></button>

        <div className=' '>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          <ReportComponentList/>
          
        </div>

      </div>
      
    </div>
  )
}

export default ReportComponent
