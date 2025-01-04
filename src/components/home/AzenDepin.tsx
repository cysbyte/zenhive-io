import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bg from '@/assets/home/content/bg-azen-depin.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'

const AzenDepin = () => {
    const data = [
        {
            id: 1,
            title: 'Active DePINs',
            desc: <p className='font-pingFangSCRegular font-semibold text-[40px] leading-[40px] text-white'>55,305</p>
        },
        {
            id: 2,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-[40px] leading-[40px] text-white'>82,751 <span className='text-[#C0EE02]'>G</span></p>
        },
        {
            id: 3,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-[40px] leading-[40px] text-white'>2,190,638 <span className='text-[#C0EE02]'>G</span></p>
        },
        {
            id: 4,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-[40px] leading-[40px] text-white'>3,493,574,328 </p>
        },
    ]
    return (
        <ContentContainer>
            <h2 className='font-pingFangSCRegular text-[72px] leading-[76px] tracking-[0.4px] font-semibold text-white mt-[11rem] w-full text-center'>aZen DePIN Lite</h2>
            <p className='font-pingFangSCLight text-xl font-normal tracking-[0.4px] text-[#ADABB2] w-full text-center mt-6 mb-20'>Through the aZen DePIN protocol, users can tokenize computing resources and applications. Rewards are distributed based on the quality, duration, availability, and utilization of rented resources by customers.</p>
            <div className='w-full h-[616px] relative rounded-2xl overflow-hidden border border-[#3D3E3D]'>
                <img className='absolute top-0 right-0' src={bg} alt="" />
                <div>
                    <div className='relative z-10 w-[553px] grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-8 mt-44 ml-[42rem]'>
                        {
                            data.map((item)=>(
                                <div key={item.id}>
                                    <h5 className='font-pingFangSCLight font-light text-base text-[#D4D8DB] pb-2'>{item.title}</h5>
                                    {item.desc}
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-start items-center gap-3 mt-16 ml-[42rem] relative'>
                        <img className='hover:opacity-80 duration-300' src={googleplay} alt="" />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(AzenDepin)
