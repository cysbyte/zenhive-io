import React from 'react'
import bg1 from '@/assets/product/earn3/bg-nano1.png'
import bg2 from '@/assets/product/earn3/bg-nano2.svg'

const Nano = () => {
  return (
    <div className='relative w-full h-[500px] border border-[#3D3E3D] rounded-xl mt-20 overflow-hidden'>
        <img className='absolute right-0 top-0 z-30 h-[500px]' src={bg1} alt="" />
        <img className='absolute right-0 top-0 z-20' src={bg2} alt="" />
        <div className='ml-[90px] mt-[100px]'>
            <h4 className='font-pingFangSCRegular text-3xl text-white '>ZenHive Nano NFT</h4>
            <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-2'>A virtual 1/64 of a ZenHive device hosted in the data center. </p>
            <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] text-white mt-10'>29.95 USDT</h2>
            <button className='bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-4 px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl'>Buy Now</button>
        </div>
    </div>
  )
}

export default React.memo(Nano)