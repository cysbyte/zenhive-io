import React from 'react'
import bg1 from '@/assets/product/earn3/bg-nano1.png'
import bg2 from '@/assets/product/earn3/bg-nano2.svg'
import bgm1 from '@/assets/product/earn3/bg-nano-m1.png'
import bgm2 from '@/assets/product/earn3/bg-nano-m2.svg'

const Nano = () => {
  return (
    <div className='relative w-full h-[600px] md:h-[500px] border border-[#3D3E3D] rounded-xl mt-10 md:mt-20 overflow-hidden'>
      <img className='block md:hidden absolute left-0 bottom-0 object-cover w-[358px] h-[320px]' src={bgm1} alt="" />
      <img className='block md:hidden absolute left-0 top-0 w-full h-full object-cover' src={bgm2} alt="" />
      <img className='hidden md:block absolute right-0 top-0 z-30 h-[500px]' src={bg1} alt="" />
      <img className='hidden md:block absolute right-0 top-0 z-20 object-cover h-full' src={bg2} alt="" />
      <div className='ml-6 md:ml-[90px] mt-8 md:mt-[100px]'>
        <h4 className='font-pingFangSCRegular text-3xl text-white '>ZenHive Nano NFT</h4>
        <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-2'>A virtual 1/64 of a ZenHive device hosted in the data center. </p>
        <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[60px] text-white mt-10'>29.95 USDT</h2>
        <button className='bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-3 md:py-4 px-[4.5rem] md:px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl'>Buy Now</button>
      </div>
    </div>
  )
}

export default React.memo(Nano)