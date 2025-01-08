import React from 'react'
import ContentContainer from '../container/ContentContainer'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import googleplaym from '@/assets/product/azen-depin/googleplay-m.svg'
import AzenDepinDetail from '../home/AzenDepinDetail'

const AzenDepin = () => {
    return (
        <ContentContainer>
            <div className='flex flex-col justify-start items-center gap-5 mt-20 md:mt-40 mb-10 md:mb-14'>
                <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] md:text-[72px] md:leading-[100px] text-white'>aZen DePIN Lite</h2>
                <p className='font-pingFangSCLight text-xl text-[#ADABB2] text-center tracking-tight'>aZen DePIN Lite transforms your idle computing resources into dynamic fractional NFTs (dfNFTs), turning them into rentable and<br/> valuable assets. </p>
                <p className='font-pingFangSCLight text-xl text-[#ADABB2] text-center tracking-tight'>aZen DePIN Lite offers businesses location-based services (LBS) such as CDN and Consumer Data Insights, empowering smarter, more dynamic, and data-driven operations.</p>
                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hidden md:block hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='block md:hidden -mt-4 md:-mt-0 hover:opacity-80 duration-300' src={googleplaym} alt="" /></a>
            </div>
            <AzenDepinDetail/>
        </ContentContainer>
    )
}

export default React.memo(AzenDepin)