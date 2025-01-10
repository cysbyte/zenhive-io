import React from 'react'
import ContentContainer from '../container/ContentContainer'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import miniapp from '@/assets/home/hero/bg-miniapp.svg'
import appstoreMobile from '@/assets/home/hero/appstore-mobile.svg'
import googleplayMobile from '@/assets/home/hero/googleplay-mobile.svg'
import miniappMobile from '@/assets/home/hero/miniapp-mobile.svg'

const Hero = () => {
  const data = [
    {
      id: 1,
      title: 'Download',
      desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[54px] md:leading-[76px] text-white'>350,222</p>
    },
    {
      id: 2,
      title: 'MAU',
      desc: <p className='font-pingFangSCRegular font-semibold text-3xl md:text-[54px] md:leading-[76px] text-white'>63K<span className='text-[#C0EE02]'>+</span></p>
    },
  ]
  return (
    <ContentContainer>
      <article  className='w-full md:w-[560px] relative pt-0 md:pt-[10rem] pb-0 md:pb-[7rem] z-50'>
        {/* <div id='azen-hub'></div> */}
        <h1 className='font-poppins text-[48px] leading-[58px] md:text-[58px] md:leading-[78px] font-normal text-white'>aZen Hub</h1>
        <p className='hidden md:block font-pingFangSCLight font-normal text-xl text-[#ADABB2] mt-2'>aZen Hub is the gateway to your DePIN experience. Integrated with the aZen DePIN protocol, users receive $aZen rewards as Proof of Contribution for sharing computing resources.</p>
        <p className='block md:hidden font-pingFangSCLight font-normal text-xl text-[#ADABB2] mt-2'>aZen Hub is the gateway to your DePIN experience. <br/>Integrated with the aZen DePIN protocol, users receive $aZen rewards as Proof of Contribution for sharing computing resources.</p>

        <div className='flex justify-start items-center gap-10 md:gap-24 mt-10 md:mt-16 ml-0'>
          {
            data.map((item) => (
              <div key={item.id}>
                <h5 className='font-pingFangSCRegular font-medium text-base md:text-xl text-[#D4D8DB] pb-2'>{item.title}</h5>
                {item.desc}
              </div>
            ))
          }
        </div>
        <div className='hidden md:flex justify-start items-center gap-3 mt-12 ml-0'>
          <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstore} alt="" /></a>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
          <a target='_blank' href="https://t.me/aZennetwork1_bot"><img className='hover:opacity-80 duration-300' src={miniapp} alt="" /></a>
        </div>
        <div className='flex md:hidden flex-col justify-start items-center gap-6 mt-10'>
          <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstoreMobile} alt="" /></a>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.manager"><img className='hover:opacity-80 duration-300' src={googleplayMobile} alt="" /></a>
          <a target='_blank' href="https://t.me/aZennetwork1_bot"><img className='hover:opacity-80 duration-300' src={miniappMobile} alt="" /></a>
        </div>

      </article>
    </ContentContainer>
  )
}

export default React.memo(Hero)