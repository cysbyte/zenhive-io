import React from 'react'
import ContentContainer from '../container/ContentContainer'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import appstoreMobile from '@/assets/home/hero/appstore-mobile.svg'
import googleplayMobile from '@/assets/home/hero/googleplay-mobile.svg'

const Hero = () => {
  return (
    <ContentContainer>
      <article className='w-full md:w-[909px] relative pt-[8rem] md:pt-[12rem] pb-[18rem] z-50'>
        <h1 className='font-poppins text-[48px] leading-[72px] md:text-[58px] md:leading-[78px]  font-normal text-white'><span className='font-semibold text-[#C0EE02] '>Reinventing</span> Computing Infrastructure</h1>
        <div className='hidden md:flex justify-start items-center gap-6 mt-14'>
          <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstore} alt="" /></a>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
        </div>
        <div className='flex flex-col md:hidden justify-start items-center gap-6 mt-14'>
          <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstoreMobile} alt="" /></a>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager"><img className='hover:opacity-80 duration-300' src={googleplayMobile} alt="" /></a>
        </div>
      </article>
    </ContentContainer>
  )
}

export default React.memo(Hero)