import React from 'react'
import ContentContainer from '../container/ContentContainer'
import logo1 from '@/assets/zenhive/join/logo1.svg'
import logo2 from '@/assets/zenhive/join/logo2.svg'
import PrimeHost from '../product/PrimeHost'
import Nano from '../product/Nano'
import ZenHiveEdge from '../product/ZenHiveEdge'

const Join = () => {
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[100px] text-white w-full text-center'>Join the Revolution</h2>
        <p className='font-pingFangSCLight text-xl text-[#ADABB2] w-full text-center'>ZenHive Dual-Architecture for unparalleled performance for AI and Data Solutions </p>
        <div className='w-full h-[300px] flex justify-center items-center border border-[#454645] rounded-xl gap-20 mt-12'>
            <div className='w-[300px]'>
                <img src={logo1} alt="" />
                <h5 className='font-pingFangSCLight text-xl text-white mt-8 mb-3'>Intel(Linux)</h5>
                <p className='font-pingFangSCLight text-sm text-[#ADABB2]'>Optimized for advanced AI inferencing and large-scale data processing, delivering real-time analytics and intelligent decision-making at the edge.</p>
            </div>
            <div className='w-[1px] h-[142px] bg-[#454645]'></div>
            <div className='w-[300px]'>
                <img src={logo2} alt="" />
                <h5 className='font-pingFangSCLight text-xl text-white mt-8 mb-3'>Qualcomm (Android)</h5>
                <p className='font-pingFangSCLight text-sm text-[#ADABB2]'>Qualcomm (Android): Engineered for efficient data collection and lightweight processing, ideal for customer engagement and geo-centric solutions.</p>
            </div>
        </div>
        <PrimeHost/>
        <Nano/>
        <ZenHiveEdge/>
    </ContentContainer>
  )
}

export default React.memo(Join)