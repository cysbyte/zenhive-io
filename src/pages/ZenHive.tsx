import Container from '@/components/container/Container'
import Footer from '@/components/zenhive/Footer'
import Header from '@/components/zenhive/Header'
import bg1 from '@/assets/zenhive/hero/bg-hero1.svg'
import bg2 from '@/assets/product/hero/bg-hero2.svg'
import bg3 from '@/assets/zenhive/hero/bg-hero3.svg'
import bgm from '@/assets/zenhive/hero/bg-hero-m.svg'
import bgm2 from '@/assets/zenhive/hero/bg-hero-m2.svg'
import React, { Suspense } from 'react'
import Hero from '@/components/zenhive/Hero'
import Mining from '@/components/zenhive/Mining'
import Join from '@/components/zenhive/Join'
import Stake from '@/components/zenhive/Stake'
import Features from '@/components/zenhive/Features'
import Commercial from '@/components/zenhive/Commercial'
import Gaming from '@/components/zenhive/Gaming'
import Peer from '@/components/zenhive/Peer'
import Trusted from '@/components/zenhive/Trusted'
import { useDialogContext } from '@/providers/DialogProvider'
import ZenHiveMenu from '@/components/mobile-menu/ZenHiveMenu'
import GetInTouchDialog from '@/components/zenhive/GetInTouchDialog'

const ZenHive = () => {

  const { showZenHiveMenu, setShowZenHiveMenu, showGetInTouchDialog, setShowGetInTouchDialog } = useDialogContext()

  return (
    <main className='overflow-x-hidden bg-black h-screen'>
      <Container>
        <div className='w-full relative bg-[#0F1110] h-[583px] md:h-[833px] '>
          <img className='hidden md:block absolute -left-0 -top-20 xl:top-0 w-[1920px] xl:w-[2220px] h-[920px] xl:h-[1420px] z-20 -ml-0' src={bg2} alt="" />
          <img className='hidden md:block absolute bottom-14 right-0 xl:right-10 z-20' src={bg1} alt="" />
          <img className='hidden md:block absolute bottom-0 right-0 z-10' src={bg3} alt="" />
          <img className='block md:hidden absolute top-0 left-0 z-10' src={bgm} alt="" />
          <img className='block md:hidden absolute bottom-2 left-0 z-10' src={bgm2} alt="" />
          <Header />
          <Hero />
        </div>
        <div className='w-full relative bg-[#0F1110]'>
          <Mining />
          <Join />
          <Stake />
          <Features />
          <Commercial />
          <Gaming />
          <Peer />
          <Trusted />
        </div>
        <Footer />
        {
          showZenHiveMenu &&
          <Suspense fallback={<div>Loading...</div>}>
            <ZenHiveMenu
              onClose={() => setShowZenHiveMenu(false)}
              onOk={() => setShowZenHiveMenu(false)}
            />
          </Suspense>
        }
        {
          showGetInTouchDialog &&
          <Suspense fallback={<div>Loading...</div>}>
            <GetInTouchDialog
              onClose={() => setShowGetInTouchDialog(false)}
              onOk={() => setShowGetInTouchDialog(false)}
            />
          </Suspense>
        }
      </Container>
    </main>
  )
}

export default React.memo(ZenHive)
