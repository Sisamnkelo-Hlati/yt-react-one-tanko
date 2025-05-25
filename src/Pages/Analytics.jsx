import React from 'react'
import Header from '../Components/Header'
import LeftBar from '../Components/LeftBar'
import SumissionBarChart from '../Components/SumissionBarChart'
import LChart from '../Components/LChart'
import Mloses from '../Components/Mloses'
import Dloses from '../Components/Dloses'
import TotalDelivery from '../Components/TotalDelivery'
import SalesIn from '../Components/SalesIn'
import NonSubmssions from '../Components/NonSubmissions'
import DepotDelivery from '../Components/DepotDeliveries'
import SideInfo from '../Components/SideInfo'

const Analytics = () => {
  return (
     <div className=' h-screen w-full overflow-hidden '>
                                       <Header/>
                    
                                <div className='h-[calc(100vh-56px)] bg-gray-50 flex'>
                                    <div className=' w-[310px] p-4  sticky top-0 overflow-y-scroll bg-white visible-scrollBar'>
                                        <LeftBar />
                                    </div>
                                    <div className=' w-full mx-2 bg-gray-50 rounded-xl h-full overflow-y-scroll ' >
                                        
                                      <div className= 'grid grid-cols-4  p-3 gap-3 h-full auto-rows-[minmax(200px, auto)] mb-4'>

                                        <div className= 'p-5 rounded-lg shadow-lg bg-white col-span-1 row-span-3'>
                                          <SumissionBarChart/>
                                        </div>
                                        <div className= 'p-3 rounded-lg shadow-lg bg-white '>
                                          <NonSubmssions/>

                                        </div>
                                        <div className= 'p-3 rounded-lg shadow-lg bg-white '>
                                          <TotalDelivery/>
                                        </div>
                                        <div className= 'p-5 rounded-lg shadow-lg bg-white col-span-1 row-span-3'>
                                          <SideInfo/>
                                        </div>
                                        <div className= 'p-3 rounded-lg shadow-lg bg-white '>
                                          <SalesIn/>
                                        </div>
                                        <div className= 'p-3 rounded-lg shadow-lg bg-white '>
                                          <DepotDelivery/>
                                        </div>
                                        <div className= 'p-5 rounded-lg shadow-lg bg-white col-span-2 row-span-2'>

                                            <LChart/>

                                        </div>
                                        <div className= 'p-5 rounded-lg shadow-lg bg-white'>

                                            <Mloses/>
                                        </div>
                                        <div className= 'p-5 rounded-lg shadow-lg bg-white'>
                                          <Dloses/>
                                        </div>

                                      </div>
                                  
                                    </div>
                                    
                                </div>
    </div>
  )
}

export default Analytics
