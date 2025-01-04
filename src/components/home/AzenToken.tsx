import React from 'react'
import ContentContainer from '../container/ContentContainer'
import azenToken from '@/assets/home/content/azen-token.svg'
import icon1 from '@/assets/home/content/azen-token-icons/1.svg'
import icon2 from '@/assets/home/content/azen-token-icons/2.svg'
import icon3 from '@/assets/home/content/azen-token-icons/3.svg'

const AzenToken = () => {

    const data = [
        {
            id: 1,
            title: 'SocialFi',
            desc: 'Earn $aZen by promoting social media content and fostering community engagement.',
            icon: icon1,
        },
        {
            id: 2,
            title: 'DePIN Lite',
            desc: 'Share idle computing resources from various devices to build a decentralized green network and generate rewards.',
            icon: icon2,
        },
        {
            id: 3,
            title: 'ZenHive Mining',
            desc: 'Invest in and set up a ZenHive to mine $aZen.',
            icon: icon3,
        },
    ]

    return (
        <ContentContainer>
            <div className='flex justify-between items-center mt-40 mr-20'>
                <h2 className='font-inter font-semibold text-[72px] leading-[72px] tracking-[0.4px] text-white mt-28'>$aZen Token</h2>
                <img src={azenToken} alt="" />
            </div>
            <div className='flex justify-between items-center px-16 py-8 border border-[#FFFFFF3D] rounded-xl pb-16'>
                {
                    data.map((item)=>(
                        <div key={item.id} className='w-[240px]'>
                            <img src={item.icon} alt="" />
                            <h5 className='font-pingFangSCRegular text-white font-semibold text-base my-6'>{item.title}</h5>
                            <p className='font-pingFangSCLight text-sm font-normal text-[#ADABB2]'>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </ContentContainer>
    )
}

export default React.memo(AzenToken)