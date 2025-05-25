import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import { Link } from 'react-router-dom';

const SideInfo = () => {
  return (
    <div>
        <div className='flex flex-col gap-1'>
            <div className='border-b'>
                <div className='flex items-center gap-1'>
                    <MessageOutlinedIcon className='mr-1  '/>
                    <span className= ' font-bold text-sm uppercase'>Deliveries vs Sales In</span>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-xl '>400</h1>
                         <Link to= '/' className='text-sm text-[#009B00] hover:underline cursor-pointer'>
                              View All
                          </Link>
                    </div>
                    <div className= 'flex flex-col items-center gap-1'>
                    <span className='text-sm text-green-500 font-bold'>85%</span>
                    <span className='text-[10px] text-gray-500 whitespace-nowrap font-bold'>this month</span>
                </div>
                </div>
            </div>
             <div className='border-b'>
                <div className='flex items-center gap-1'>
                    <MessageOutlinedIcon className='mr-1  '/>
                    <span className= ' font-bold text-sm uppercase'>Deliveries vs Depot</span>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold text-xl '>400</h1>
                         <Link to= '/' className='text-sm text-[#009B00] hover:underline cursor-pointer'>
                              View All
                          </Link>
                    </div>
                    <div className= 'flex flex-col items-center gap-1'>
                    <span className='text-sm text-green-500 font-bold'>85%</span>
                    <span className='text-[10px] text-gray-500 whitespace-nowrap font-bold'>this month</span>
                </div>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex items-center justify-between'>
                <span className='text-sm font-semibold  uppercase text-[#009B00] hover:underline cursor-pointer'>Consignment sites</span>
                <h1 className='font-bold'>160</h1>
            </div>
            <div className='flex items-center justify-between'>
                <span className='text-sm font-semibold uppercase text-[#009B00] hover:underline cursor-pointer'>Assignment sites</span>
                <h1 className='font-bold'>355</h1>

            </div>

            <div className='flex items-center justify-between'>
                <span className='text-sm font-semibold uppercase text-[#009B00] hover:underline cursor-pointer'>All sites</span>
                <h1 className='font-bold'>515</h1>

            </div>
        </div>
    </div>
  )
}

export default SideInfo
