
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';

const sideBar = () => {
    return(
        <div className="px-3 ">
            <div className="flex flex-col gap-3">

                <div className="flex items-center justify-between">
                    <Link to= "/profile">
                    <div className="flex items-center gap-3">
                        <img src="/assets/cleaning2.jpg" className='w-8 h-8  object-cover shrink-0 object-center rounded-full' alt="" />
                        <span className="text-sm whitespace-nowrap font-bold">Sisamnkelo Hlati</span>

                    </div>
                    </Link>
                   
                </div>
                <div className="flex flex-col gap-3 p-3">
                    <Link to= "/messages">
                    <div className='flex items-center justify-between'>
                        <span className="text-sm whitespace-nowrap text-gray-500" ><MessageOutlinedIcon className='mr-2 text-sm'/>Messages</span>
                        <div className= 'h-5 w-6 flex items-center justify-center bg-[#98CE00] text-white rounded-md text-xs'>5</div>

                    </div>
                    </Link>
                    <Link to= "/settings">
                    <span className="text-sm whitespace-nowrap text-gray-500"><SettingsOutlinedIcon className= 'mr-2 text-sm'/>Settings</span>
                    </Link>
                </div>
                <hr />
                <div className="">
                    <div className="flex items-center justify-between gap-2">
                        <span>Stakeholders</span>
                        <button className="py-1 px-2 text-xs border-0 outline-0 bg-[#009B00] text-white font-bold flex items-center gap-1"> <AddOutlinedIcon className= ' text-white font-bold text-sm'/>Create <KeyboardArrowDownOutlinedIcon className='text-sm'/></button>

                    </div>
                    <div className="flex flex-col gap-3 p-3">

                        <Link to= "/tsos">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">TSOs</span>
                        </Link>
                        <Link to= "/rbms">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">RBMs</span>
                        </Link>
                        <Link to= "/roms">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">ROMs</span>
                        </Link>
                        <Link to= "/sites">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">Sites</span>
                        </Link>
                        <Link to= "/depots">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">Depot</span>
                        </Link>

                        <Link to= "/gbs-team">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">GBS Team</span>
                        </Link>
                        <Link to= "/other">
                        <span className="text-sm whitespace-nowrap text-gray-500 ">Other </span>
                        </Link>
                    </div>
                    
                   
                </div>
                <hr />
                <div className="">
                    <div className="">
                        <span>Reconciliation</span>
                        

                    </div>
                    <div className="flex flex-col gap-3 p-3">
                        <Link to= "/analytics">
                        <span className="text-sm whitespace-nowrap text-gray-500 "><TimelineOutlinedIcon className= 'mr-2 text-sm'/>Analytics</span>
                        </Link>
                        <Link to= "/reports">
                        <span className="text-sm whitespace-nowrap text-gray-500 "> <ReportGmailerrorredOutlinedIcon className='mr-2 text-sm'/> Reports</span>
                        </Link>
                    </div>
                    
                   
                </div>
                <hr />

                <div className="">
                    <div className="">
                        <span className='flex items-center justify-between text-gray-500'>More  <KeyboardArrowDownOutlinedIcon className='text-sm'/></span>
                        

                    </div>
                    <div className="flex flex-col gap-3 p-3">
                     <Link to= "/help">   
                    <span className="text-sm whitespace-nowrap text-gray-500"> <InfoOutlinedIcon className= 'mr-2 text-sm'/> Help & support</span>
                    </Link>
                    <span className="text-sm whitespace-nowrap text-gray-500"> <LogoutOutlinedIcon className= 'mr-2 text-sm'/> Logout</span>
                   
                    </div>
                    
                   
                </div>
               
            </div>
        </div>
    )
}

export default sideBar