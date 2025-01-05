import React from 'react'
import bg from '@/assets/home/content/bg-azen-depin.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'

const AzenDepinDetail = () => {
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
        <div className='w-full h-[616px] relative rounded-2xl overflow-hidden border border-[#3D3E3D]'>
            <img className='absolute top-0 right-0 w-full h-full' src={bg} alt="" />
            <div>
                <div className='relative z-10 w-[553px] grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-8 mt-44 ml-[38rem] xl:ml-[42rem]'>
                    {
                        data.map((item) => (
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
    )
}

export default React.memo(AzenDepinDetail)