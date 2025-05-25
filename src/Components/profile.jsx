
import React from 'react'

const profile = () => {
  return (
    <div className='py-8 px-5'>
        <div className='flex items-start gap-3 mb-3'>
            <img src="/assets/cleaning2.jpg" className='w-36 h-36  object-cover shrink-0 object-center rounded-2xl' alt="" />
            <div>
                <span className=" font-bold whitespace-nowrap ">Sisamnkelo Hlati</span>
                <p className=' text-gray-500 mb-3'>Econometrics and Data science analyst</p>

                <div className='flex flex-col '>
                    <div className='flex  gap-3'>
                        <span className='  font-bold'>Email Address:</span>
                        <span className=' text-gray-500 mb-3'>sisamnkelo.hlati@bp.com</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='  font-bold'>Phone Numbe:</span>
                        <span className=' text-gray-500 mb-3'>0826546654</span>
                    </div>

                    <div className='flex  gap-3'>
                        <span className='  font-bold'>Position:</span>
                        <span className=' text-gray-500 mb-3'>RBM</span>
                    </div>

                    <div className='flex gap-3'>
                        <span className='  font-bold'>Region:</span>
                        <span className=' text-gray-500 mb-3'>Inland 1</span>
                    </div>
                    
                    
      </div>

            </div>
            
        </div>
      
        <div className='bg-gray-50 w-[600px] rounded-full p-3'>
                        <input className='bg-transparent outline-none border-none w-[80%]' type="text" placeholder='Send a message....' />
                    </div>
            
    </div>
  )
}

export default profile