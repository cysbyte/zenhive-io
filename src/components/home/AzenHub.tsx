import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bgAzenHub from '@/assets/home/content/bg-azen-hub.svg'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import miniapp from '@/assets/home/hero/bg-miniapp.svg'

const AzenHub = () => {
    const data = [
        {
            id: 1,
            title: 'Download',
            desc: <p className='font-pingFangSCRegular font-semibold text-[54px] leading-[76px] text-white'>350,222</p>
        },
        {
            id: 2,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-[54px] leading-[76px] text-white'>63K<span className='text-[#C0EE02]'>+</span></p>
        },
    ]
    return (
        <ContentContainer>
            <h2 className='font-pingFangSCRegular text-[72px] leading-[76px] tracking-[0.4px] font-semibold text-white mt-[11rem] w-full text-center'>aZen Hub</h2>
            <p className='font-pingFangSCLight text-xl font-normal tracking-[0.4px] text-[#ADABB2] w-full text-center mt-6 mb-20'>aZen Hub is the gateway to your DePIN experience. Integrated with the aZen DePIN protocol, users receive $aZen rewards as POC (Proof of Contribution) for sharing computing resources.</p>
            <div className='w-full h-[616px] relative rounded-2xl overflow-hidden border border-[#3D3E3D]'>
                <img className='absolute top-0 -right-64 xl:right-0 w-full h-full' src={bgAzenHub} alt="" />
                <div>
                    <div className='flex justify-start items-center gap-24 mt-48 ml-10'>
                        {
                            data.map((item)=>(
                                <div key={item.id}>
                                    <h5 className='font-pingFangSCRegular font-medium text-xl text-[#D4D8DB] pb-4'>{item.title}</h5>
                                    {item.desc}
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-20 ml-10'>
                        <img className='hover:opacity-80 duration-300' src={appstore} alt="" />
                        <img className='hover:opacity-80 duration-300' src={googleplay} alt="" />
                        <img className='hover:opacity-80 duration-300' src={miniapp} alt="" />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(AzenHub)
