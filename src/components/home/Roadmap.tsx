import React from 'react'
import bg from '@/assets/home/content/roadmap/bg-roadmap.png'
import quarters from '@/assets/home/content/roadmap/quarters.png'
import descs from '@/assets/home/content/roadmap/descs.svg'

const Roadmap = () => {
    return (
        <section className='w-full relative h-[850px] mt-10 flex flex-col justify-center items-center gap-10'>
            <div>
                <img className='absolute top-0 left-0 object-cover mix-blend-lighten w-full h-full' src={bg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-[#B6F55E] mix-blend-hue'>
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-[#0F1110] mix-blend-hue'>
                </div>
            </div>

            <h2 className='font-inter font-semibold text-[72px] leading-[72px] tracking-[0.4px] text-white mt-10'>Roadmap</h2>
            <img className='z-50 mt-10 ' src={quarters} alt="" />
            <img className='z-50 opacity-1 self-end' src={descs} alt="" />

        </section>
    )
}

export default React.memo(Roadmap)
