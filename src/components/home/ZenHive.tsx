import React from 'react'
import { useNavigate } from 'react-router-dom';
import ContentContainer from '../container/ContentContainer'
import bg from '@/assets/home/content/bg-zenhive.png'
import bgm from '@/assets/home/content/bg-zenhive-m.svg'
import check from '@/assets/home/content/check.svg'
import go from '@/assets/home/content/go.svg'

const ZenHive = () => {
  const navigate = useNavigate();
  const handleClick = (page: string) => {
    navigate(page);
  };
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
      <div id='zenhive' className='relative w-full h-[680px] md:h-[697px] border border-[#3D3E3D] rounded-xl mt-20 md:mt-40'>
        <img className='hidden md:block absolute top-0 left-0 w-full h-full' src={bg} alt="" />
        <img className='block md:hidden absolute bottom-0 left-0 w-full' src={bgm} alt="" />
        <div className='w-full md:w-[550px] flex flex-col justify-start items-start gap-4 md:gap-6 ml-6 md:ml-[38rem] xl:ml-[42rem] mt-8 md:mt-16 px-4'>
          <h2 className='font-inter font-semibold text-3xl md:text-[72px] md:leading-[72px] tracking-[0.4px] text-center text-white w-full -ml-8'>ZenHive</h2>
          <p className='font-pingFangSCLight font-normal text-base text-[#D4D8DB]'>The first mass commercial adoption DePIN device built on aZen Protocol.</p>
          <div className='flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-2 w-full md:w-[515px] md:gap-x-20 md:gap-y-7 mt-8'>
            {
              data.map((item) => (
                <div key={item.id} className='flex justify-start items-center gap-2'>
                  <img src={item.icon} alt="" />
                  <p className='font-pingFangSCLight font-normal text-sm text-white'>{item.name}</p>
                </div>
              ))
            }
          </div>
          <button className='flex justify-center items-center gap-2 px-[5.5rem] py-2.5 bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] rounded-lg mt-6 md:mt-8 relative z-50'
            onClick={() => handleClick('/zenhive')} >
            Go
            <img src={go} alt="" />
          </button>
        </div>

      </div>
    </ContentContainer>
  )
}

export default React.memo(ZenHive)