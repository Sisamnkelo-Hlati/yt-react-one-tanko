
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

const LeftBar = () => {
    return(
        <div className=" ">
            <div className="flex flex-col">

                <div className="flex items-center justify-between mb-2 w-full p-3">
                    <Link to= "/profile">
                    <div className="flex items-center gap-3 cursor-pointer  ">
                        <img src="/assets/dzu-1.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />
                        <span className=" whitespace-nowrap font-bold text-gray-500">Sisamnkelo Hlati</span>

                    </div>
                    </Link>
                   
                </div>
                <div className="flex flex-col gap-2 w-full px-1">

                    <Link to= "/" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1 active:bg-[#70df70] mt-1 '>
                    
                        <span className=" text-sm whitespace-nowrap text-gray-500 group-hover:text-white" ><HomeOutlinedIcon className='mr-2  '/>Home</span>
                        

                    </Link>

                    <Link to= "/messages" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1 mb-3 active:bg-[#70df70] mt-1 flex items-center justify-between'>
                    
                        <span className=" text-sm whitespace-nowrap text-gray-500 group-hover:text-white" ><MessageOutlinedIcon className='mr-2  '/>Messages</span>
                        <div className= 'h-5 w-6 flex items-center justify-center bg-[#98CE00] text-white rounded-md text-xs'>5</div>

                    </Link>
                   

                </div>
                <hr />
                <div className="w-full mt-3">
                    <div className="">
                        <span className='flex items-center justify-between text-gray-400'>Reconsiliation  <KeyboardArrowDownOutlinedIcon className='text-sm'/></span>
                        

                    </div>
                    <div className="flex flex-col gap-3 mt-2 w-full mb-3">
                        
                        <Link to= "/analytics" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1 active:bg-[#70df70]'>
                            <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white "><TimelineOutlinedIcon className= 'mr-2 text-sm'/>Analytics</span>
                        </Link>
                        
                        <Link to= "/reports" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white"> <ReportGmailerrorredOutlinedIcon className='mr-2 text-sm'/> Reports</span>
                        </Link>
                    </div>
                    
                   
                </div>
                <hr />
                <div className="mt-3">
                    <div className=" ">
                        <span className='flex items-center justify-between text-gray-400'>Stakeholders  <KeyboardArrowDownOutlinedIcon className='text-sm'/></span>
                        

                    </div>
                    <div className="flex flex-col gap-3 w-full mt-2">

                        <Link to= "/tsos" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white">TSOs</span>
                        </Link>
                        <Link to= "/rbms" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white ">RBMs</span>
                        </Link>
                        <Link to= "/roms" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white ">ROMs</span>
                        </Link>
                        <Link to= "/sites" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white ">Sites</span>
                        </Link>
                        <Link to= "/depots" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white">Depot</span>
                        </Link>

                        <Link to= "/gbs-team" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white">GBS Team</span>
                        </Link>
                        <Link to= "/other" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1 mb-3'>
                        <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white">Other </span>
                        </Link>
                    </div>
                    
                   
                </div>
                
                <hr />

                <div className="mt-3 mb-3">
                    <div className="">
                        <span className='flex items-center justify-between text-gray-400'>More  <KeyboardArrowDownOutlinedIcon className='text-sm'/></span>
                        

                    </div>
                    <div className="flex flex-col gap-3 mt-1">
                     <Link to= "/help" className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>   
                    <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white"> <InfoOutlinedIcon className= 'mr-2 text-sm'/> Help & support</span>
                    </Link>
                    <div className='w-full cursor-pointer group hover:bg-[#70df70] px-3 py-1'>
                    <span className="text-sm whitespace-nowrap text-gray-500 group-hover:text-white"> <LogoutOutlinedIcon className= 'mr-2 text-sm'/> Logout</span>
                    </div>
                    </div>
                    
                   
                </div>
               
            </div>
        </div>
    )
}

export default LeftBar