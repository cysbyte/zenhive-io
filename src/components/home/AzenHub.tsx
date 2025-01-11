import appstorem from '@/assets/home/content/azen-hub/appstore-m.svg'
import googleplaym from '@/assets/home/content/azen-hub/googleplay-m.svg'
import miniappm from '@/assets/home/content/azen-hub/miniapp-m.svg'
import bgAzenHub from '@/assets/home/content/bg-azen-hub.svg'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import miniapp from '@/assets/home/hero/bg-miniapp.svg'
import React from 'react'
import ContentContainer from '../container/ContentContainer'

const AzenHub = () => {
    const data = [
        {
            id: 1,
            title: 'Download',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[54px] md:leading-[76px] text-white'>350,222</p>
        },
        {
            id: 2,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[54px] md:leading-[76px] text-white'>63K<span className='text-[#C0EE02]'>+</span></p>
        },
    ]
    return (
        <ContentContainer>
            <h2 className='font-pingFangSCRegular text-[30px] leading-[45px] md:text-[72px] md:leading-[76px] tracking-[0.4px] font-semibold text-white mt-20 md:mt-[11rem] w-full text-center'>aZen Hub</h2>
            <p className='font-pingFangSCLight text-[16px] leading-[24px] md:text-xl font-normal tracking-[0.4px] text-[#ADABB2] w-full text-center mt-6 mb-8 md:mb-20 '>aZen Hub is the gateway to your DePIN experience. Integrated with the aZen DePIN protocol, users receive $aZen rewards as POC (Proof of Contribution) for sharing computing resources.</p>
            <div id="azen-hub" className='w-full h-[708px] md:h-[616px] relative rounded-2xl overflow-hidden border border-[#3D3E3D]'>
                <img className='hidden md:block absolute top-0 -right-72 w-full h-full ' src={bgAzenHub} alt="" />
                <img className='block md:hidden absolute -bottom-40 right-0 w-full h-full ' src={bgAzenHub} alt="" />
                <div>
                    <div className='flex justify-start items-center gap-12 md:gap-24 mt-8 md:mt-48 ml-6 md:ml-8'>
                        {
                            data.map((item)=>(
                                <div key={item.id}>
                                    <h5 className='font-pingFangSCRegular font-medium text-xl md:text-xl text-[#D4D8DB] pb-4'>{item.title}</h5>
                                    {item.desc}
                                </div>
                            ))
                        }
                    </div>
                    <div className='hidden md:flex justify-start items-center gap-3 mt-20 ml-10 z-50 relative'>
                        <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstore} alt="" /></a>
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
                        <a target='_blank' href="https://t.me/aZennetwork1_bot"><img className='hover:opacity-80 duration-300' src={miniapp} alt="" /></a>
                    </div>
                    <div className='flex flex-col md:hidden justify-start items-start gap-4 mt-10 ml-6 z-50 relative'>
                        <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstorem} alt="" /></a>
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager"><img className='hover:opacity-80 duration-300' src={googleplaym} alt="" /></a>
                        <a target='_blank' href="https://t.me/aZennetwork1_bot"><img className='hover:opacity-80 duration-300' src={miniappm} alt="" /></a>
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(AzenHub)
