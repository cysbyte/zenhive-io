import React from 'react'
import bg from '@/assets/home/content/roadmap/bg-roadmap.png'
import bgm from '@/assets/home/content/roadmap/bg-roadmap-m.png'
import quarters from '@/assets/home/content/roadmap/quarters.png'
import quartersm from '@/assets/home/content/roadmap/quarters-m.svg'
import descs from '@/assets/home/content/roadmap/descs.svg'
import descsm from '@/assets/home/content/roadmap/desc-m.svg'

const Roadmap = () => {
    return (
        <section className='w-full relative h-[600px] md:h-[850px] mt-20 md:mt-10 flex flex-col justify-start items-center gap-10'>
            <div className=''>
                <img className='hidden md:block absolute top-0 left-0 object-cover mix-blend-lighten w-full h-full' src={bg} alt="" />
                <img className='block md:hidden absolute top-0 left-0 object-cover h-full w-full mix-blend-lighten' src={bgm} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-[#B6F55E] mix-blend-hue'>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-[#0F1110] mix-blend-hue'>
                </div>
            </div>

            <h2 className='font-inter font-medium text-3xl md:text-[72px] md:leading-[72px] tracking-[0.4px] text-white mt-6 md:mt-10'>Roadmap</h2>
            <img className='hidden md:block z-50 mt-10 ' src={quarters} alt="" />
            <img className='block md:hidden z-50 mt-2 ' src={quartersm} alt="" />
            <img className='hidden md:block z-50 opacity-1 self-end' src={descs} alt="" />
            <img className='mx-auto block md:hidden z-50 opacity-1 self-end' src={descsm} alt="" />

        </section>
    )
}

export default React.memo(Roadmap)
