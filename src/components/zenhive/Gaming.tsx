import React from 'react'
import ContentContainer from '../container/ContentContainer'
import icon1 from '@/assets/zenhive/gaming/icon1.svg'
import icon2 from '@/assets/zenhive/gaming/icon2.svg'
import icon3 from '@/assets/zenhive/gaming/icon3.svg'
import border from '@/assets/zenhive/gaming/border.svg'

const Gaming = () => {
    const data = [
        {
            id: 1,
            title: 'Virtual Gaming Machine',
            desc1: '"Play instantly, no downloads needed"',
            desc2: '"Stream games seamlessly via Virtual Machines"',
            icon: icon1,
        },
        {
            id: 2,
            title: 'Network Acceleration',
            desc1: '"Decentralized, location-based optimization"',
            desc2: '"Faster, smoother gaming experience"',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Data Insights',
            desc1: '"Analyze player behavior"',
            desc2: '"Enhance game design and boost revenue"',
            icon: icon3,
        },
    ]
    return (
        <ContentContainer>
            <div className='flex justify-between items-start mt-40'>
                <div className='w-[539px]'>
                    <h3 className='font-pingFangSCRegular text-5xl text-white'>Gaming Launchpads</h3>
                    <p className='font-pingFangSCLight text-xl text-[#ADABB2] mt-6'>ZenHive provides a decentralized Gaming Launchpad on DePIN infrastructure.<br /><br />It empowers gamers to play directly via Virtual Machines without downloads, ensures location-based network acceleration for optimal performance, and leverages actionable data insights to enhance game development and maximize revenue growth.</p>
                </div>
                <div className='w-[620px]'>
                    {
                        data.map((item) => (
                            <div>
                                <div key={item.id} className='flex justify-start items-start gap-6'>
                                    <img src={item.icon} alt="" />
                                    <div>
                                        <h5 className='font-pingFangSCRegular text-2xl font-semibold text-white mb-4'>{item.title}</h5>

                                        <p className='font-pingFangSCLight text-xl text-[#ADABB2]'>{item.desc1}</p>
                                        <p className='font-pingFangSCLight text-xl text-[#ADABB2]'>{item.desc2}</p>
                                    </div>
                                </div>
                                {item.id < 3 && <img className='my-14' src={border} alt="" />}
                            </div>
                        ))
                    }
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(Gaming)