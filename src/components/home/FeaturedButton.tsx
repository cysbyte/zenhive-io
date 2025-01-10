import React from 'react'
import arrow from '@/assets/home/content/featured/arrow.svg'

const FeaturedButton = ({ logo, link }: { logo: string, link: string }) => {
    return (
        <a className='w-[280px] cursor-default md:cursor-pointer flex justify-center items-center gap-4 border border-[#3D3E3D] rounded-lg hover:border-white py-4' target='_blank' href={link}>
            <img src={logo} alt="" />
            <img src={arrow} alt="" />
        </a>
    )
}

export default React.memo(FeaturedButton)