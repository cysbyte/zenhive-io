// import bgAzen from '@/assets/home/header/bg-azen.svg'
// import bg1 from '@/assets/home/header/bg1.png'
import bg from '@/assets/home/hero/bg-hero.jpeg'
import bgMobile from '@/assets/home/hero/bg-mobile.svg'
import Container from '@/components/container/Container'
import AzenDepin from '@/components/home/AzenDepin'
import AzenHub from '@/components/home/AzenHub'
import AzenToken from '@/components/home/AzenToken'
import Featured from '@/components/home/Featured'
import Footer from '@/components/home/Footer'
import Hero from '@/components/home/Hero'
import OurTeam from '@/components/home/OurTeam'
import Parteners from '@/components/home/Parteners'
import Roadmap from '@/components/home/Roadmap'
import Stack from '@/components/home/Stack'
import ZenHive from '@/components/home/ZenHive'
import MobileMenu from '@/components/mobile-menu/MobileMenu'
import { useDialogContext } from '@/providers/DialogProvider'
import React, { Suspense } from 'react'
import Header from '../components/home/Header'

const Home = () => {

  const { showMenu, setShowMenu } = useDialogContext()

  return (
    <main className='overflow-x-hidden bg-black h-screen'>
      <Container>
        <div className='w-full relative bg-[#0F1110] overflow-hidden h-[840px] md:h-[833px]'>
          {/* <div className='hidden md:block absolute left-0 bottom-0 z-10 w-[1962px] h-[480px] bg-gradient-to-r from-[#76EC37] to-[#B5F60100]'></div>
          <img className='hidden md:block absolute left-0 top-0 w-[1920px] h-[1020px] z-20 -ml-0' src={bg1} alt="" />
          <img className='hidden md:block absolute top-0 xl:-right-0 right-20 z-20 -mr-16 xl:mr-[11rem]' src={bgAzen} alt="" /> */}
          <img className='hidden md:block absolute top-0 xl:-right-0 right-20 z-20' src={bg} alt="" />
          <img className='absolute left-0 top-0 block md:hidden z-1 object-cover w-full' src={bgMobile} alt="" />
          <img className='absolute left-0 top-0 block md:hidden z-1 object-cover w-full' src={bgMobile} alt="" />
          <Header />
          <Hero />
        </div>

        <div className='w-full relative bg-[#0F1110]'>
            {/* <img className='w-full h-[1200px] absolute top-[26rem] left-0 mix-blend-lighten' src={bgStack1} alt="" />
            <div className='w-full absolute left-0 top-[26rem] h-[700px] bg-[#B6F55E] mix-blend-hue'></div>
            <div className='absolute top-0 left-0 w-full h-full bg-[#0F1110] mix-blend-hue'>
            </div> */}

          <Stack />
          <AzenHub />
        </div>
        <div className='w-full relative bg-[#0F1110]'>
          <AzenDepin />
          <AzenToken />
          <ZenHive />
          <Roadmap />
          <OurTeam />
          <Parteners />
          <Featured />
        </div>
        <Footer />
        {
          showMenu &&
          <Suspense fallback={<div>Loading...</div>}>
            <MobileMenu
              onClose={() => setShowMenu(false)}
              onOk={() => setShowMenu(false)}
            />
          </Suspense>
        }
      </Container>

    </main>
  )
}

export default React.memo(Home)