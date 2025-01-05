import Container from '@/components/container/Container'
import Footer from '@/components/zenhive/Footer'
import Header from '@/components/zenhive/Header'
import bg1 from '@/assets/zenhive/hero/bg-hero1.svg'
import bg2 from '@/assets/product/hero/bg-hero2.svg'
import bg3 from '@/assets/zenhive/hero/bg-hero3.svg'
import React from 'react'
import Hero from '@/components/zenhive/Hero'
import Mining from '@/components/zenhive/Mining'
import Join from '@/components/zenhive/Join'
import Stake from '@/components/zenhive/Stake'
import Features from '@/components/zenhive/Features'
import Commercial from '@/components/zenhive/Commercial'
import Gaming from '@/components/zenhive/Gaming'
import Peer from '@/components/zenhive/Peer'
import Trusted from '@/components/zenhive/Trusted'

const ZenHive = () => {
  return (
    <main className='overflow-x-hidden bg-black h-screen'>
      <Container>
        <div className='w-full relative bg-[#0F1110] h-[833px] '>
          <img className='absolute -left-0 -top-20 xl:top-0 w-[1920px] xl:w-[2220px] h-[920px] xl:h-[1420px] z-20 -ml-0' src={bg2} alt="" />
          <img className='absolute bottom-14 xl:right-0 right-44 z-20' src={bg1} alt="" />
          <img className='absolute bottom-0 right-0 z-10' src={bg3} alt="" />
          <Header />
          <Hero />
        </div>
        <div className='w-full relative bg-[#0F1110]'>
            <Mining/>
            <Join/>
            <Stake/>
            <Features/>
            <Commercial/>
            <Gaming/>
            <Peer/>
            <Trusted/>
        </div>
        <Footer />
      </Container>
    </main>
  )
}

export default React.memo(ZenHive)
