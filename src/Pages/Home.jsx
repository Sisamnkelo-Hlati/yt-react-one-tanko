import React from 'react'
import Header from '../Components/Header'
//import MasterSiteList from './MasterSiteList'
//import DataTable from '../Components/DataTable'
import LeftBar from '../Components/LeftBar'
import SingleCom from './SingleCom'
//import Post from "../components/posts"

const Home = ()=>{
    return(
        <div className=' h-screen w-full overflow-hidden'>
                <Header/>

            <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
                <div className=' w-[310px] p-4  sticky top-0 overflow-y-scroll bg-white visible-scrollBar'>
                    <LeftBar />
                </div>
                <div className=' w-[90%] bg-gray-50 overflow-y-scroll visible-scrollBar' >
                    
                    <div className=' w-[800px] mx-auto  mb-3 p-3'>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                        <SingleCom/>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default Home