import Container from '@/components/container/Container'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import bg1 from '@/assets/product/hero/bg-hero1.svg'
import bg2 from '@/assets/product/hero/bg-hero2.svg'
import ellipse from '@/assets/product/hero/bg-ellipse.svg'
import React from 'react'
import Hero from '@/components/product/Hero'
import Earn1 from '@/components/product/Earn1'
import AzenDepin from '@/components/product/AzenDepin'
import Earn2 from '@/components/product/Earn2'
import ZenHive from '@/components/home/ZenHive'
import Earn3 from '@/components/product/Earn3'

const Product = () => {
  return (
    <main className='overflow-x-hidden bg-black h-screen'>
      <Container>
        <div className='w-full relative bg-[#0F1110] overflow-hidden'>
          <div className='absolute left-0 bottom-0 z-10 w-[1962px] h-[480px] bg-gradient-to-r from-[#76EC37] to-[#B5F60100]'></div>
          <img className='absolute -left-0 -top-20 w-[2220px] h-[1420px] z-20 -ml-0' src={bg2} alt="" />
          <img className='absolute -left-[700px] top-0 z-20 -ml-10' src={ellipse} alt="" />
          <img className='absolute top-0 right-20 z-20 mr-[11rem]' src={bg1} alt="" />
          <Header />
          <Hero />
        </div>
        <div className='w-full relative bg-[#0F1110]'>
          <Earn1/>
          <AzenDepin/>
          <Earn2/>
          <ZenHive/>
          <Earn3/>
        </div>
        <Footer />
      </Container>
    </main>
  )
}

export default React.memo(Product)
