import React from 'react'
import icon1 from '@/assets/zenhive/features/icon1.svg'
import icon2 from '@/assets/zenhive/features/icon2.svg'
import icon3 from '@/assets/zenhive/features/icon3.svg'
import ContentContainer from '../container/ContentContainer'
import border from '@/assets/zenhive/features/border.svg'
import borderm from '@/assets/zenhive/features/border-m.svg'

const Features = () => {
    const data = [
        {
            id: 1,
            title: 'AI at the Edge',
            icon: icon1,
            detail: [
                {
                    id: 1,
                    title: 'Real-Time Processing',
                    desc: 'Leverage cutting-edge AI and Large Language Models (LLMs) at the edge for instant decision-making and context-aware responses.',
                },
                {
                    id: 2,
                    title: 'Cost-Effective Operations',
                    desc: 'Reduce reliance on cloud infrastructure, minimizing latency and lowering operational costs. Enhanced Privacy: Keep sensitive data processed locally, ensuring robust security and compliance.',
                },
            ]
        },
        {
            id: 2,
            title: 'Optimized Real-Time Data Solutions',
            icon: icon2,
            detail: [
                {
                    id: 1,
                    title: 'Instant Actionable Insights',
                    desc: 'Transform raw data into precise, real-time insights that power smarter decisions.',
                },
                {
                    id: 2,
                    title: 'Scalable and Flexible',
                    desc: 'Support dynamic business needs with a decentralized infrastructure that grows seamlessly as data demands increase.',
                },
                {
                    id: 3,
                    title: 'Cost Savings',
                    desc: 'Streamline operations with efficient data processing, reducing cloud storage and computing expenses.',
                },
            ]
        },
        {
            id: 3,
            title: 'Geo-Centric Solutions for User Growth',
            icon: icon3,
            detail: [
                {
                    id: 1,
                    title: 'Location-Based Intelligence',
                    desc: 'Deliver hyper-personalized, location-aware services to expand user bases and improve engagement.',
                },
                {
                    id: 2,
                    title: 'Targeted Marketing',
                    desc: 'Enhance customer acquisition with precision targeting driven by real-time geo-data.',
                },
                {
                    id: 3,
                    title: 'Industry Adaptability',
                    desc: 'Enable businesses to grow smarter and faster in sectors like social commerce, gaming, smart cities, and healthcare.',
                },
            ]
        },
    ]
    return (
        <ContentContainer>
            <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[100px] text-white w-full text-center mt-20 md:mt-40'>ZenHive Features</h2>
            {
                data.map((feature) => (
                    <div key={feature.id} className='flex flex-col md:flex-row justify-between items-start py-6 md:py-20 relative'>
                        <div className='flex flex-col md:flex-row justify-start items-start md:items-center flex-1 gap-6'>
                            <img src={feature.icon} alt="" />
                            <h3 className='font-pingFangSCRegular text-2xl md:text-3xl font-semibold text-[#C0EE02] w-full md:w-[330px]'>{feature.title}</h3>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-4 flex-1 mt-4 md:mt-0'>
                            {
                                feature.detail.map((item) => (
                                    <div key={item.id}>
                                        <h5 className='font-pingFangSCLight text-base text-white'>{item.title}</h5>
                                        <p className='font-pingFangSCLight text-sm text-[#ADABB2]'>{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                        {feature.id < 3 && <img className='hidden md:block absolute left-0 bottom-0' src={border} alt="" />}
                        {feature.id < 3 && <img className='block md:hidden absolute left-0 bottom-0' src={borderm} alt="" />}
                    </div>
                ))
            }
        </ContentContainer>
    )
}

export default React.memo(Features)