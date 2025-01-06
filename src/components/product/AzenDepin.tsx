import React from 'react'
import ContentContainer from '../container/ContentContainer'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import AzenDepinDetail from '../home/AzenDepinDetail'

const AzenDepin = () => {
    return (
        <ContentContainer>
            <div className='flex flex-col justify-start items-center gap-5 mt-40 mb-14'>
                <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[100px] text-white'>aZen DePIN Lite</h2>
                <p className='font-pingFangSCLight text-xl text-[#ADABB2] text-center'>aZen DePIN Lite transforms your idle computing resources into dynamic fractional NFTs (dfNFTs), turning them into rentable and<br/> valuable assets. </p>
                <p className='font-pingFangSCLight text-xl text-[#ADABB2] text-center'>aZen DePIN Lite offers businesses location-based services (LBS) such as CDN and Consumer Data Insights, empowering smarter, more dynamic, and data-driven operations.</p>
                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
            </div>
            <AzenDepinDetail/>
        </ContentContainer>
    )
}

export default React.memo(AzenDepin)