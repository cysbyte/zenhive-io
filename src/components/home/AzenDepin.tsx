import React from 'react'
import ContentContainer from '../container/ContentContainer'
import AzenDepinDetail from './AzenDepinDetail'


const AzenDepin = () => {
   
    return (
        <ContentContainer>
            <h2 className='font-pingFangSCRegular text-[72px] leading-[76px] tracking-[0.4px] font-semibold text-white mt-[11rem] w-full text-center'>aZen DePIN Lite</h2>
            <p className='font-pingFangSCLight text-xl font-normal tracking-[0.4px] text-[#ADABB2] w-full text-center mt-6 mb-20'>Through the aZen DePIN protocol, users can tokenize computing resources and applications. Rewards are distributed based on the quality, duration, availability, and utilization of rented resources by customers.</p>
            <AzenDepinDetail/>
        </ContentContainer>
    )
}

export default React.memo(AzenDepin)
