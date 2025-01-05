import React from 'react'
import bg1 from '@/assets/product/earn3/bg-prime-host1.png'
import bg2 from '@/assets/product/earn3/bg-prime-host2.svg'

const PrimeHost = () => {
  return (
    <div className='relative w-full h-[500px] border border-[#C0EE02] rounded-xl mt-20 overflow-hidden'>
        <img className='absolute left-0 top-0 z-30 h-[500px]' src={bg1} alt="" />
        <img className='absolute left-0 top-0 z-20 object-cover h-full' src={bg2} alt="" />
        <div className='ml-[750px] mt-[100px]'>
            <h4 className='font-pingFangSCRegular text-3xl text-white '>ZenHive PrimeHost NFT</h4>
            <p className='font-pingFangSCLight text-base text-[#ADABB2] mt-2'>A ZenHive device hosted at a professional data center.</p>
            <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] text-white mt-10'>999.95 USDT</h2>
            <button className='bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-4 px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl'>Buy Now</button>
        </div>
    </div>
  )
}

export default React.memo(PrimeHost)