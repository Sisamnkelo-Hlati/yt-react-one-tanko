
import React from 'react'

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const SingleCom = () => {
  return (
    <div className=' p-5 bg-white rounded-lg shadow-lg mb-3'>
      
      <div className=' '>
        <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center gap-3'>
                <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />

                <div className='flex flex-col'>
                    <span className=" font-semibold whitespace-nowrap ">Sisamnkelo Hlati</span>
                    <span className='text-xs text-gray-400 font-bold'>1 day ago</span>

                
                </div>
                
            </div>
            
            <MoreVertOutlinedIcon className= 'text-sm text-gray-500'/>
        </div>

        <h1 className='my-4 font-semibold text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>

        <p className=' text-gray-500 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat mollitia repellendus, laudantium praesentium nihil dignissimos necessitatibus a sit nesciunt fuga saepe nisi reiciendis cumque, excepturi quibusdam dolorem sapiente iste.</p>

        <img src="/assets/cleaning2.jpg" className='w-full h-[400px]  object-cover shrink-0 object-center rounded-lg ' alt="" />
        

        <div className='flex items-center gap-4 my-4'>
            <div className=''>
                <span className= ' text-sm text-gray-500'> <ThumbUpOutlinedIcon className= 'mr-2 text-sm text-gray-500'/> Likes</span>
            </div>
            <div className=''>
                
                <span className='text-sm text-gray-500'> <InsertCommentOutlinedIcon className= 'mr-2 text-sm text-gray-500'/> Comment</span>
            </div>
        </div>

        <div className='flex items-center gap-3'>
            <p className='my-4 text-gray-500'>See all comments</p>
            <div className= 'h-5 w-6 flex items-center justify-center bg-[#98CE00] text-white rounded-md text-xs'>5</div>
        </div>

        <div className='w-full '>
                <div className='flex items-start gap-3  px-1 py-2 w-full my-2'>
                    <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />
                    <div className="w-full">
                        <div>
                        <div className=' flex items-center justify-between w-full '> 
                            <div className=' flex items-center gap-2'>
                                <span className="whitespace-nowrap text-sm">Sisamnkelo Hlati</span>
                                <span className='text-xs text-gray-400 font-bold'>1 day ago</span>
                            </div> 
                            <MoreVertOutlinedIcon className= 'text-sm text-gray-500'/>
                        </div>
                            
                            <p className='text-sm text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                           
                        <div className='flex items-center gap-3 mt-2'>
                            <ThumbUpOutlinedIcon className= 'mr-2 text-xs text-gray-500'/>
                            <InsertCommentOutlinedIcon className= 'mr-2 text-xs text-gray-500'/>

                        </div>
                        
                    </div>
                    

                </div>


                <div className='flex items-start gap-3  px-1 py-2 w-full'>
                    <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />
                    <div className="w-full">
                        <div>
                        <div className=' flex items-center justify-between w-full '> 
                            <div className=' flex items-center gap-2'>
                                <span className="whitespace-nowrap text-sm">Sisamnkelo Hlati</span>
                                <span className='text-xs text-gray-400 font-bold'>1 day ago</span>
                            </div> 
                            <MoreVertOutlinedIcon className= 'text-sm text-gray-500'/>
                        </div>
                            
                            <p className='text-sm text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                           
                        <div className='flex items-center gap-3 mt-2'>
                            <ThumbUpOutlinedIcon className= 'mr-2 text-xs text-gray-500'/>
                            <InsertCommentOutlinedIcon className= 'mr-2 text-xs text-gray-500'/>

                        </div>
                        
                    </div>
                    

                </div>
        </div>

        <div className=' flex items-center gap-3 my-4 w-full'>
        <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />

          <div className='w-[75%] bg-gray-50 p-2 rounded-full'>
          <input className='bg-transparent outline-none border-none' type="text" placeholder='Reply here....' />
        </div>       
        

        </div>

      </div>
    </div>
  )
}

export default SingleCom