import React from 'react'
import ContentContainer from '../container/ContentContainer'
import icon1 from '@/assets/zenhive/peer/icons1/icon1.svg'
import icon2 from '@/assets/zenhive/peer/icons1/icon2.svg'
import icon3 from '@/assets/zenhive/peer/icons1/icon3.svg'
import border from '@/assets/zenhive/peer/border.svg'
import i1 from '@/assets/zenhive/peer/icons2/icon1.svg'
import i2 from '@/assets/zenhive/peer/icons2/icon2.svg'
import i3 from '@/assets/zenhive/peer/icons2/icon3.svg'
import i4 from '@/assets/zenhive/peer/icons2/icon4.svg'

const Peer = () => {
    const data1 = [
        {
            id: 1,
            title: 'Content Tokenization (NFTs)',
            desc1: 'Transform content into monetizable NFTs;',
            desc2: 'Unlock new revenue streams and boost sales growth',
            icon: icon1,
        },
        {
            id: 2,
            title: 'Peer-to-Peer Streaming',
            desc1: 'Decentralized content delivery;',
            desc2: 'Faster, low-latency video streaming',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Decentralized Storage',
            desc1: 'Secure, scalable media storage;',
            desc2: 'Reduce costs and increase reliability',
            icon: icon3,
        },
    ]

    const data2 = [
        {
            id: 1,
            title: 'Smart Cities',
            desc: 'Power real-time monitoring, traffic optimization, and urban safety.',
            icon: i1,
        },
        {
            id: 2,
            title: 'Healthcare',
            desc: 'Process large-scale medical data for diagnostics and research.',
            icon: i2,
        },
        {
            id: 3,
            title: 'Education',
            desc: 'Personalize learning with AI-driven content recommendations.',
            icon: i3,
        },
        {
            id: 4,
            title: 'Supply Chain',
            desc: 'Ensure operational efficiency with real-time tracking and decentralized data sharing.',
            icon: i4,
        },
    ]

    return (
        <ContentContainer>
            <h3 className='font-pingFangSCRegular text-3xl leading-[48px] md:text-5xl text-white mt-20 md:mt-40'>Peer-to-Peer Video Entertainment</h3>
            <p className='font-pingFangSCLight text-base md:text-xl text-[#ADABB2] mt-4 md:mt-8'>ZenHive delivers an advanced Peer-to-Peer Video Entertainment Service powered by decentralized infrastructure and AI. <br /><br />It enables seamless video streaming through peer-to-peer networks, offers secure decentralized storage, and uses AI to personalize content. Additionally, by tokenizing content into NFTs, it unlocks new revenue streams and monetization opportunities, enhancing user acquisition and driving sales growth for content providers. </p>
            <div className='w-full h-auto md:h-[420px] border border-[#454645] rounded-xl flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 px-4 md:px-16 py-10 md:py-10 mt-10'>
                {
                    data1.map((item) => (
                        <>
                            <div key={item.id} className='hidden md:block w-[326px] relative'>
                                {item.id < 3 && <img className='absolute top-0 right-0 mt-20 xl:-mr-9 -mr-4' src={border} alt="" />}
                                <img src={item.icon} alt="" />
                                <h5 className='font-pingFangSCRegular text-xl text-white my-6'>{item.title}</h5>
                                <p className='font-pingFangSCLight text-base text-[#ADABB2]'>{item.desc1}</p>
                                <p className='font-pingFangSCLight text-base text-[#ADABB2]'>{item.desc2}</p>
                            </div>
                            <div key={item.id} className='block md:hidden w-full md:w-[326px] relative'>
                                <div className='flex gap-2 justify-start items-center'>
                                    <img className='w-[83px]' src={item.icon} alt="" />
                                    <h5 className='font-pingFangSCRegular text-base md:text-xl text-white my-6'>{item.title}</h5>
                                </div>
                                <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-4'>{item.desc1}</p>
                                <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-2'>{item.desc2}</p>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className='w-full h-auto md:h-[400px] flex flex-col md:flex-row justify-between items-start gap-2 md:gap-6 overflow-hidden mt-10 md:mt-40 bg-gradient-to-r from-[#141712] to-[#12120C] border border-[#454645] rounded-xl md:border-0' >
                {
                    data2.map((item) => (
                        <>
                            <div className='hidden md:block border border-[#454645] rounded-xl h-full overflow-hidden p-5 flex-1'>
                                <img src={item.icon} alt="" />
                                <h5 className='font-pingFangSCRegular text-white text-3xl mt-10 mb-4'>{item.title}</h5>
                                <p className='font-pingFangSCLight text-[#ADABB2] text-sm'>{item.desc}</p>
                            </div>
                            <div className='block md:hidden h-full overflow-hidden p-5 flex-1'>
                                <div className='flex justify-start items-center gap-4'>
                                    <img className='w-[40px]' src={item.icon} alt="" />
                                    <h5 className='font-pingFangSCRegular text-white text-base'>{item.title}</h5>
                                </div>
                                <p className='font-pingFangSCLight text-[#ADABB2] text-sm tracking-tight mt-4'>{item.desc}</p>
                            </div>
                        </>
                    ))
                }

            </div>
        </ContentContainer>
    )
}

export default React.memo(Peer)