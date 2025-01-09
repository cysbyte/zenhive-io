import React from 'react'
import bg1 from '@/assets/product/earn3/bg-nano1.png'
import bg2 from '@/assets/product/earn3/bg-nano2.svg'
import bgm1 from '@/assets/product/earn3/bg-nano-m1.png'
import bgm2 from '@/assets/product/earn3/bg-nano-m2.svg'

const Nano = () => {

  const data = [
    {
      id: 1,
      desc: 'Affordable Mining: Start earning rewards with a low upfront investment.',
    },
    {
      id: 2,
      desc: 'Flexible Ownership: Effortlessly transfer ownership when needed.'
    }
  ]

  return (
    <div className='relative w-full h-[660px] md:h-[500px] border border-[#3D3E3D] rounded-xl mt-10 md:mt-20 overflow-hidden'>
      <img className='block md:hidden absolute left-0 bottom-0 object-cover w-[358px] h-[320px]' src={bgm1} alt="" />
      <img className='block md:hidden absolute left-0 top-0 w-full h-full object-cover' src={bgm2} alt="" />
      <img className='hidden md:block absolute right-0 top-0 z-30 h-[500px]' src={bg1} alt="" />
      <img className='hidden md:block absolute right-0 top-0 z-20 object-cover h-full' src={bg2} alt="" />
      <div className='ml-6  md:ml-[90px] mt-8 md:mt-[100px]'>
        <h4 className='font-pingFangSCRegular text-3xl text-white '>ZenHive Nano NFT</h4>
        <p className='font-pingFangSCLight text-base text-[#FFFFFF] mt-2 w-full md:w-[493px]'>A virtual machine hosted in the data center, representing 1/64th of a ZenHive device.</p>
        <div className='mt-4'>
              {
                data.map((item)=>(
                  <div className='flex justify-start items-start gap-2 mt-1'>
                    <div className='w-[10px] h-full'>
                    <div className='w-[5px] h-[5px] bg-[#ADABB2] rounded-full mt-1.5'></div>
                    </div>
                    <p className='w-full md:w-[530px] text-[14px] leading-[20px] text-[#ADABB2] font-pingFangSCLight tracking-tightest md:tracking-wider'>{item.desc}</p>
                  </div>
                ))
              }
            </div>
        <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[60px] text-white mt-24 md:mt-10'>29.95 USDT</h2>
        <button className='hidden md:block bg-gradient-to-r from-[#C0EE02] to-[#C0EE02] rounded-xl py-4 md:py-3.5 px-[4.5rem] md:px-20 mt-4 font-pingFangSCRegular font-bold text-black text-xl'>Buy Now</button>
      </div>
    </div>
  )
}

export default React.memo(Nano)