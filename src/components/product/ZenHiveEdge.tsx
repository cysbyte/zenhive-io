import React from 'react'
import bg from '@/assets/product/earn3/bg-zenhive-edge.svg'
import bg2 from '@/assets/product/earn3/bg-zenhive-edge2.svg'
import left from '@/assets/product/earn3/left.svg'
import right from '@/assets/product/earn3/right.svg'

const ZenHiveEdge = () => {
    return (
        <div className='relative w-full h-[1011px] border border-[#3D3E3D] rounded-xl mt-20 mb-40'>
            <img className='absolute right-0 top-0 z-20' src={bg} alt="" />
            <img className='absolute right-0 bottom-0 z-20' src={bg2} alt="" />
            <div className='w-full flex flex-col justify-start items-center'>
                <h4 className='font-pingFangSCRegular text-5xl font-semibold text-white mt-16'>ZenHive Edge</h4>
                <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-6'>A physical device delivered to your address, ready to connect to the internet and electricity to start mining.</p>
                <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] text-white mt-10'>999.95 USDT</h2>
                <button className='bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-4 px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl'>Buy Now</button>
            </div>
            <img className='absolute bottom-[270px] left-[90px] z-50' src={left} alt="" />
            <img className='absolute bottom-[270px] right-[90px] z-50' src={right} alt="" />
        </div>
    )
}

export default React.memo(ZenHiveEdge)