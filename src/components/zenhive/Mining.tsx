import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bg from '@/assets/zenhive/mining/bg.svg'

const Mining = () => {
    return (
        <ContentContainer>
            <div className='relative w-full z-50'>
                <img className='hidden md:block absolute -top-48 right-0' src={bg} alt="" />
                <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[100px] text-white mt-20 md:mt-48'>ZenHive Mining</h2>
                <h5 className='font-pingFangSCRegular font-normal text-[20px] leading-[36px] md:text-3xl text-[#C0EE02] mt-4 md:mt-2'>Start Simple, Earn Big, Real Contribution</h5>
                <div className='w-full md:w-[1145px] mt-6 md:mt-10'>
                    <h5 className='font-pingFangSCLight text-white text-xl'>Get Started</h5>
                    <p className='font-pingFangSCLight text-[#ADABB2] text-base mt-2'>Get your ZenHive device, activate it, and mine through the Proof of Contribution (PoC) mechanism. Earn rewards from computing, delegating, and aggregating.</p>
                </div>
                <div className='w-full md:w-[1145px] mt-8 mb-48'>
                    <h5 className='font-pingFangSCLight text-white text-xl'>Empower Industries</h5>
                    <p className='font-pingFangSCLight text-[#ADABB2] text-base mt-2'>Your mining fuels AI and data-driven services for industries like gaming, smart cities, healthcare, and entertainment. </p>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(Mining)