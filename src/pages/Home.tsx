import React from 'react'
import Header from '../components/home/Header'
import bg1 from '@/assets/home/header/bg1.png'
import bgAzen from '@/assets/home/header/bg-azen.svg'
import Hero from '@/components/home/Hero'
import Container from '@/components/container/Container'
import Stack from '@/components/home/Stack'
import AzenHub from '@/components/home/AzenHub'
import AzenDepin from '@/components/home/AzenDepin'
import AzenToken from '@/components/home/AzenToken'
import ZenHive from '@/components/home/ZenHive'
import Roadmap from '@/components/home/Roadmap'
import OurTeam from '@/components/home/OurTeam'
import Parteners from '@/components/home/Parteners'
import Featured from '@/components/home/Featured'
import Footer from '@/components/home/Footer'

const Home = () => {
  return (
    <main className='overflow-x-hidden bg-black h-screen'>
      <Container>
        <div className='w-full relative bg-[#0F1110]'>
          <div className='absolute left-0 bottom-0 z-10 w-[1962px] h-[480px] bg-gradient-to-r from-[#76EC37] to-[#B5F60100]'></div>
          <img className='absolute left-0 top-0 w-[1920px] h-[1020px] z-20 -ml-0' src={bg1} alt="" />
          <img className='absolute top-0 right-20 z-20 mr-[11rem]' src={bgAzen} alt="" />
          <Header />
          <Hero />
        </div>
        <div className='w-full relative bg-[#0F1110]'>
          <Stack />
          <AzenHub />
          <AzenDepin />
          <AzenToken />
          <ZenHive />
          <Roadmap />
          <OurTeam />
          <Parteners />
          <Featured />
        </div>
        <Footer />
      </Container>
    </main>
  )
}

export default React.memo(Home)