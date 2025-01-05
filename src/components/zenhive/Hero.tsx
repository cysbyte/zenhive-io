import React from 'react'
import ContentContainer from '../container/ContentContainer'
import go from '@/assets/home/content/go.svg'
import go1 from '@/assets/zenhive/hero/go.svg'

const Hero = () => {
    return (
        <ContentContainer>
            <div className='w-[850px] z-50 relative mt-44 h-full'>
                <h1 className='font-poppins font-medium text-[54px] leading-[65px] text-white'><span className='text-[#C0EE02]'>Empowering Industries</span> with Real-Time AI, Optimized Data, and DePIN Innovation</h1>
                <div className='flex justify-start items-center gap-4 mt-14'>
                    <button className='flex justify-center items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] rounded-lg'>
                        <p className='font-pingFangSCRegular text-xl font-semibold'>Get Started with ZenHive</p>
                        <img src={go} alt="" />
                    </button>
                    <button className='flex justify-center items-center gap-2 px-4 py-2.5 border border-white rounded-lg'>
                        <p className='font-pingFangSCLight text-xl text-white '>Explore Applications</p>
                        <img src={go1} alt="" />
                    </button>
                </div>
            </div>

        </ContentContainer>
    )
}

export default React.memo(Hero)