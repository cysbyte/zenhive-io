import React from 'react'
import ContentContainer from '../container/ContentContainer'
import logo1 from '@/assets/zenhive/join/logo1.svg'
import logo2 from '@/assets/zenhive/join/logo2.svg'
import separator from '@/assets/zenhive/join/separator.svg'
import PrimeHost from '../product/PrimeHost'
import Nano from '../product/Nano'
import ZenHiveEdge from '../product/ZenHiveEdge'

const Join = () => {
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[100px] text-white w-full text-center -mt-28 md:-mt-0'>Join the Revolution</h2>
        <p className='font-pingFangSCLight text-xl text-[#ADABB2] w-full text-center'>ZenHive Dual-Architecture for unparalleled performance for AI and Data Solutions </p>
        <div className='w-full h-auto md:h-[300px] flex justify-center flex-col md:flex-row items-center border border-[#454645] rounded-xl gap-10 py-10 md:py-0 md:gap-20 mt-12'>
            <div className='w-full md:w-[300px] h-[200px] md:h-auto px-8 pb-0 md:py-10 md:p-0'>
                <img src={logo1} alt="" />
                <h5 className='font-pingFangSCLight text-xl text-white mt-6 md:mt-8 mb-3'>Intel(Linux)</h5>
                <p className='font-pingFangSCLight text-sm text-[#ADABB2]'>Optimized for advanced AI inferencing and large-scale data processing, delivering real-time analytics and intelligent decision-making at the edge.</p>
            </div>
            <div className='hidden md:block w-[1px] h-[142px] bg-[#454645]'></div>
            <div className='block md:hidden w-[300px] h-[1px] bg-[#454645]'></div>
            <div className='w-full md:w-[300px] h-[200px] md:h-auto px-8 pb-0 md:py-10 md:p-0'>
                <img src={logo2} alt="" />
                <h5 className='font-pingFangSCLight text-xl text-white mt-6 md:mt-8 mb-3'>Qualcomm (Android)</h5>
                <p className='font-pingFangSCLight text-sm text-[#ADABB2] mb-8'>Qualcomm (Android): Engineered for efficient data collection and lightweight processing, ideal for customer engagement and geo-centric solutions.</p>
            </div>
        </div>
        <PrimeHost/>
        <Nano/>
        <ZenHiveEdge/>
    </ContentContainer>
  )
}

export default React.memo(Join)