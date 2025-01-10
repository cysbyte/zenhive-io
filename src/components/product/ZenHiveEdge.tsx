import React, { useState } from 'react'
import bg from '@/assets/product/earn3/bg-zenhive-edge.svg'
import bg2 from '@/assets/product/earn3/bg-zenhive-edge2.svg'
import bg3 from '@/assets/product/earn3/bg-zenhive-edge3.svg'
import bgm from '@/assets/product/earn3/bg-zenhive-edge-m.png'
import left from '@/assets/product/earn3/left.svg'
import right from '@/assets/product/earn3/right.svg'
import BuyButton from '../zenhive/BuyButton'
import slider1 from '@/assets/product/zenhiveedge/1.png'
import slider2 from '@/assets/product/zenhiveedge/2.png'
import slider3 from '@/assets/product/zenhiveedge/3.png'
import slider4 from '@/assets/product/zenhiveedge/4.png'
import slider5 from '@/assets/product/zenhiveedge/5.png'
import slider6 from '@/assets/product/zenhiveedge/6.png'
import slider7 from '@/assets/product/zenhiveedge/7.png'
import slider8 from '@/assets/product/zenhiveedge/8.jpg'
import slider9 from '@/assets/product/zenhiveedge/10.jpg'

const ZenHiveEdge = () => {
    const [index, setIndex] = useState(0)

    const handleLeftClick = () => {
        setIndex(index === 0 ? 9 : index - 1)
    }

    const handleRightClick = () => {
        setIndex(index === 9 ? 0 : index + 1)
        console.log(index)
    }

    return (
        <div className='relative w-full h-[660px] md:h-[1011px] border border-[#3D3E3D] rounded-xl mt-10 md:mt-20 mb-20 md:mb-40 overflow-hidden'>
            <img className='hidden md:block absolute right-0 top-0 z-20' src={bg} alt="" />
            
            <img className='block md:hidden absolute object-cover w-full h-full right-0 top-0 z-20' src={bgm} alt="" />
            <div className='w-full flex flex-col justify-start items-center text-center md:text-left px-4 md:px-0'>
                <h4 className='font-pingFangSCRegular text-3xl md:text-5xl font-semibold text-white mt-16'>ZenHive Edge</h4>
                <p className='font-pingFangSCLight text-base text-white mt-2 md:mt-6 tracking-wider'>A physical device delivered to your address, ready to connect to the internet and electricity to start mining.</p>
                
                <li className='list-disc text-sm leading-[20px] text-[#ADABB2] font-pingFangSCLight mt-2 md:mt-4 tracking-wider'><span className='w-[5px] h-[5px] bg-[#ADABB2]'></span>Start Mining: Activate and begin earning rewards through the Proof of Contribution (PoC) mechanism.</li>

                <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[40px] md:leading-[60px] text-white mt-28 md:mt-10'>999.95 USDT</h2>
                <BuyButton showDialog={true}/>
            </div>
            <img onClick={handleLeftClick} className='hidden md:block absolute bottom-[270px] cursor-pointer left-[90px] z-50' src={left} alt="" />
            <img onClick={handleRightClick} className='hidden md:block absolute bottom-[270px] cursor-pointer right-[90px] z-50' src={right} alt="" />
            
            {
                index === 0 && <img className='hidden md:block absolute right-0 bottom-0 object-contain -mb-28 z-20 h-full' src={bg2} alt="" />
            }
            {
                index === 1 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider1} alt="" />
            }
            {
                index === 2 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider2} alt="" />
            }
            {
                index === 3 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider3} alt="" />
            }
            {
                index === 4 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider4} alt="" />
            }
            {
                index === 5 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider5} alt="" />
            }
            {
                index === 6 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider6} alt="" />
            }
            {
                index === 7 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider7} alt="" />
            }
            {
                index === 8 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider8} alt="" />
            }
            {
                index === 9 && <img className='hidden md:block absolute right-0 -bottom-28 object-contain -mb-28 z-20 h-full' src={slider9} alt="" />
            }

            
        </div>
    )
}

export default React.memo(ZenHiveEdge)