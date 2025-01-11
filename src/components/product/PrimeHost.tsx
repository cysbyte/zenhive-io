import bgm1 from '@/assets/product/earn3/bg-prime-host-m.png'
import bgm2 from '@/assets/product/earn3/bg-prime-host-m1.svg'
import bg1 from '@/assets/product/earn3/bg-prime-host1.png'
import bg2 from '@/assets/product/earn3/bg-prime-host2.svg'
import React from 'react'

const PrimeHost = () => {

  const data = [
    {
      id: 1,
      desc: 'Immediate Start: Begin mining the moment your device is activated.',
    },
    {
      id: 2,
      desc: 'Guaranteed Performance: Enjoy 24-hour uptime and optimal network quality.',
    },
    {
      id: 3,
      desc: 'Zero Additional Costs: No charges for electricity or internet usage.',
    },
    {
      id: 4,
      desc: 'Flexible Ownership: Easily transfer ownership at any time.',
    }
    
  ]

  return (
    <div className='relative w-full h-[660px] md:h-[500px] border md:border-[#3D3E3D] md:hover:border-[#C0EE02] rounded-xl mt-20 overflow-hidden'>
        <img className='block md:hidden absolute left-0 bottom-0 object-cover w-[358px] h-[320px]' src={bgm1} alt="" />
        <img className='block md:hidden absolute left-0 top-0 w-full h-full object-cover' src={bgm2} alt="" />
        <img className='hidden md:block absolute left-0 top-0 z-30 h-[500px]' src={bg1} alt="" />
        <img className='hidden md:block absolute left-0 top-0 z-20 object-cover h-full' src={bg2} alt="" />
        <div className='ml-6 md:ml-[680px] mt-8 md:mt-[100px]'>
            <h4 className='font-pingFangSCRegular text-3xl text-white '>ZenHive PrimeHost NFT</h4>
            <p className='font-pingFangSCLight text-base text-white mt-2'>A ZenHive device hosted at a professional data center.</p>
            <div className='mt-4'>
              {
                data.map((item)=>(
                  <div className='flex justify-start items-start gap-2 mt-1'>
                    <div className='w-[10px] h-full'>
                    <div className='w-[5px] h-[5px] bg-[#ADABB2] rounded-full mt-1.5'></div>
                    </div>
                    <p className='text-[14px] leading-[20px] text-[#ADABB2] font-pingFangSCLight tracking-wider md:tracking-normal'>{item.desc}</p>
                  </div>
                ))
              }
            </div>
            <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[60px] text-white mt-10'>999.95 USDT</h2>
            {/* <BuyButton showDialog={false}/> */}
        </div>
    </div>
  )
}

export default React.memo(PrimeHost)