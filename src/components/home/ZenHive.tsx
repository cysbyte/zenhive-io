import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bg from '@/assets/home/content/bg-zenhive.png'
import check from '@/assets/home/content/check.svg'
import go from '@/assets/home/content/go.svg'

const ZenHive = () => {
  const data = [
    {
      id: 1,
      name: 'AI at the Edge',
      icon: check,
    },
    {
      id: 1,
      name: 'Optimized Data Solutions',
      icon: check,
    },
    {
      id: 1,
      name: 'Proof of Contribution Mining',
      icon: check,
    },
    {
      id: 1,
      name: 'Geo-Centric Solutions',
      icon: check,
    },
  ]
  return (
    <ContentContainer>
      <div className='relative w-full h-[697px] border border-[#3D3E3D] rounded-xl mt-40'>
        <img className='absolute top-0 left-0 object-cover' src={bg} alt="" />
        <div className='w-[550px] flex flex-col justify-start items-start gap-6 ml-[42rem] mt-16'>
          <h2 className='font-inter font-semibold text-[72px] leading-[72px] tracking-[0.4px] text-center text-white w-full -ml-8'>ZenHive</h2>
          <p className='font-pingFangSCLight font-normal text-base text-[#D4D8DB]'>The first mass commercial adoption DePIN device built on aZen Protocol.</p>
          <div className='grid grid-cols-2 grid-rows-2 w-[515px] gap-x-20 gap-y-7 mt-8'>
            {
              data.map((item) => (
                <div key={item.id} className='flex justify-start items-center gap-2'>
                  <img src={item.icon} alt="" />
                  <p className='font-pingFangSCLight font-normal text-sm text-white'>{item.name}</p>
                </div>
              ))
            }
          </div>
          <button className='flex justify-center items-center gap-2 px-[5.5rem] py-2.5 bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] rounded-lg mt-8'>
            <p className='font-pingFangSCRegular text-xl'>Go</p>
            <img src={go} alt="" />
          </button>
        </div>

      </div>
    </ContentContainer>
  )
}

export default React.memo(ZenHive)