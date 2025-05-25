import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const TSOsList2 = () => {
  return (
    <div className='flex items-start gap-3 w-[80%] mb-3'>
            <img src="/assets/cleaning2.jpg" className='w-[70px] h-[70px]  object-cover shrink-0 object-center rounded-lg ml-3' alt="" />
            <div className= 'w-full'>
              <div className='flex items-center justify-between '>
                <span>Sisamnkelo Hlati</span>
                <MoreVertOutlinedIcon className= 'text-sm text-gray-500'/>
              </div>
              <div className='flex items-center gap-3'>
                <span className= 'text-xs text-gray-500'>Inland 2 .</span>
                <span className= 'text-xs text-gray-500'>5 RBMs .</span>
                <span className= 'text-xs text-gray-500'>1 ROM</span>
              </div>
              
            </div>
          </div>
  )
}

export default TSOsList2
