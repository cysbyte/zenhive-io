import React from 'react'
import bg from '@/assets/home/content/bg-azen-depin.svg'
import bgm from '@/assets/home/content/bg-azen-depin-m.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import googleplaym from '@/assets/home/content/azen-hub/googleplay-m.svg'


const AzenDepinDetail = () => {
    const data = [
        {
            id: 1,
            title: 'Active DePINs',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[40px] text-white'>55,305</p>
        },
        {
            id: 2,
            title: 'Storage',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[40px] text-white'>82,751 <span className='text-[#C0EE02]'>G</span></p>
        },
        {
            id: 3,
            title: 'MAU',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[40px] text-white'>2,190,638 <span className='text-[#C0EE02]'>G</span></p>
        },
        {
            id: 4,
            title: 'Minted $XaZen',
            desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[40px] text-white'>3,493,574,328 </p>
        },
    ]
    return (
        <div className='w-full h-[832px] md:h-[616px] relative rounded-2xl overflow-hidden border border-[#3D3E3D]'>
            <img className='hidden md:block absolute top-0 right-0 w-full h-full' src={bg} alt="" />
            <img className='block md:hidden absolute top-0 right-0 w-full h-full' src={bgm} alt="" />

                <div className='relative z-10 w-full md:w-[553px] flex flex-col gap-5 md:grid grid-cols-2 grid-rows-2 md:gap-x-0 md:gap-y-8 mt-8 md:mt-44 ml-6 md:ml-[38rem] xl:ml-[42rem]'>
                    {
                        data.map((item) => (
                            <div key={item.id}>
                                <h5 className='font-pingFangSCLight font-light text-base text-[#D4D8DB] pb-2'>{item.title}</h5>
                                {item.desc}
                            </div>
                        ))
                    }
                </div>
                <div className='hidden md:flex justify-start items-center gap-3 mt-16 ml-[42rem] relative'>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
                </div>
                <div className='flex md:hidden justify-start items-center gap-3 mt-10 ml-6 relative'>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplaym} alt="" /></a>
                </div>

        </div>
    )
}

export default React.memo(AzenDepinDetail)