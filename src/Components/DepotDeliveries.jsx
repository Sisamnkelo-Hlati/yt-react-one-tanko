import { Link } from 'react-router-dom';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const DepotDelivery = () => {
  return (
    <div>
       <div className='h-[30%] '>
                   <div className='flex items-end justify-between w-full'>
                   <div flex flex-col gap-1  >
                       <div className='flex items-center gap-1'>
                           <MessageOutlinedIcon className='mr-1 '/>
                           <span className= ' font-bold text-sm uppercase'> Depot Deliveries</span>
                       </div>
                       <h1 className='font-bold text-2xl '>866</h1>
                       <Link to= '/' className='text-sm text-[#009B00] hover:underline cursor-pointer'>
                           View All
                       </Link>
                   </div>
                   <div >
                       <div>
                          
                       </div>
                       <div className= 'flex flex-col items-center gap-1'>
                           <span className='text-sm text-green-500 font-bold'>26%</span>
                           <span className='text-[10px] text-gray-500 whitespace-nowrap font-bold'>this month</span>
                       </div>
                   </div>
                   </div>
               </div>
    </div>
  )
}

export default DepotDelivery