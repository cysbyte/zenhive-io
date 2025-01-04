import React from 'react'
import logo1 from '@/assets/home/content/featured/1.svg'
import logo2 from '@/assets/home/content/featured/2.svg'
import logo3 from '@/assets/home/content/featured/3.svg'
import logo4 from '@/assets/home/content/featured/4.svg'

const Featured = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-6 w-full mt-48'>
      <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[72px] tracking-[0.4px] text-center text-white w-full'>Featured On</h2>
      <div className='w-[1264px] flex justify-between items-center mx-auto mt-10 mb-40'>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
      </div>
    </section>
  )
}

export default React.memo(Featured)