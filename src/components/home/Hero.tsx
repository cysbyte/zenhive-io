import React from 'react'
import ContentContainer from '../container/ContentContainer'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'

const Hero = () => {
  return (
    <ContentContainer>
        <article className='w-[909px] relative pt-[12rem] pb-[18rem] z-50'>
            <h1 className='font-poppins text-[58px] leading-[78px] font-normal text-white'><span className='font-semibold text-[#C0EE02] '>Reinventing</span> Computing infrastructure</h1>
            <div className='flex justify-start items-center gap-6 mt-14'>
                <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstore} alt="" /></a>
                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
            </div>
        </article>
    </ContentContainer>
      )
}

export default React.memo(Hero)