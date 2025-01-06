import React from 'react'
import ContentContainer from '../container/ContentContainer'
import appstore from '@/assets/home/hero/bg-appstore.svg'
import googleplay from '@/assets/home/hero/bg-googleplay.svg'
import miniapp from '@/assets/home/hero/bg-miniapp.svg'

const Hero = () => {
  const data = [
    {
      id: 1,
      title: 'Download',
      desc: <p className='font-pingFangSCRegular font-semibold text-[54px] leading-[76px] text-white'>350,222</p>
    },
    {
      id: 2,
      title: 'MAU',
      desc: <p className='font-pingFangSCRegular font-semibold text-[54px] leading-[76px] text-white'>63K<span className='text-[#C0EE02]'>+</span></p>
    },
  ]
  return (
    <ContentContainer>
      <article className='w-[560px] relative pt-[10rem] pb-[7rem] z-50'>
        <h1 className='font-poppins text-[58px] leading-[78px] font-normal text-white'>aZen Hub</h1>
        <p className='font-pingFangSCLight font-normal text-xl text-[#ADABB2] mt-2'>aZen Hub is the gateway to your DePIN experience. Integrated with the aZen DePIN protocol, users receive $aZen rewards as Proof of Contribution for sharing computing resources.</p>

        <div className='flex justify-start items-center gap-24 mt-16 ml-0'>
          {
            data.map((item) => (
              <div key={item.id}>
                <h5 className='font-pingFangSCRegular font-medium text-xl text-[#D4D8DB] pb-2'>{item.title}</h5>
                {item.desc}
              </div>
            ))
          }
        </div>
        <div className='flex justify-start items-center gap-3 mt-12 ml-0'>
          <a target='_blank' href="https://apps.apple.com/us/app/azen-connect/id6476482774"><img className='hover:opacity-80 duration-300' src={appstore} alt="" /></a>
          <a target='_blank' href="https://play.google.com/store/apps/details?id=com.azen.client"><img className='hover:opacity-80 duration-300' src={googleplay} alt="" /></a>
          <a target='_blank' href="https://t.me/aZennetwork1_bot"><img className='hover:opacity-80 duration-300' src={miniapp} alt="" /></a>
        </div>

      </article>
    </ContentContainer>
  )
}

export default React.memo(Hero)