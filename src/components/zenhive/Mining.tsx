import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bg from '@/assets/zenhive/mining/bg.svg'

const Mining = () => {
    return (
        <ContentContainer>
            <div className='relative w-full z-50'>
                <img className='absolute -top-48 right-0' src={bg} alt="" />
                <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[100px] text-white mt-48'>ZenHive Mining</h2>
                <h5 className='font-pingFangSCRegular font-normal text-3xl text-[#C0EE02] mt-2'>Start Simple, Earn Big, Real Contribution</h5>
                <div className='w-[1145px] mt-10'>
                    <h5 className='font-pingFangSCLight text-white text-xl'>Get Started</h5>
                    <p className='font-pingFangSCLight text-[#ADABB2] text-base mt-2'>Get your ZenHive device, activate it, and mine through the Proof of Contribution (PoC) mechanism. Earn rewards from computing, delegating, and aggregating.</p>
                </div>
                <div className='w-[1145px] mt-8 mb-48'>
                    <h5 className='font-pingFangSCLight text-white text-xl'>Empower Industries</h5>
                    <p className='font-pingFangSCLight text-[#ADABB2] text-base mt-2'>Your mining fuels AI and data-driven services for industries like gaming, smart cities, healthcare, and entertainment. Learn More About Our Industry Solutions. </p>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(Mining)