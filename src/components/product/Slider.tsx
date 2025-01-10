import leftButton from '@/assets/home/key-features/left-button.svg'
import rightButton from '@/assets/home/key-features/right-button.svg'
import slider1 from '@/assets/home/key-features/slider/1.png'
import slider2 from '@/assets/home/key-features/slider/2.png'
import slider3 from '@/assets/home/key-features/slider/3.png'
import slider4 from '@/assets/home/key-features/slider/4.png'
import slider5 from '@/assets/home/key-features/slider/5.png'
import { useState } from 'react'

const Slider = () => {

    const [index, setIndex] = useState(1)

    const handleLeftClick = () => {
        setIndex(index === 1 ? 5 : index - 1)
    }

    const handleRightClick = () => {
        setIndex(index === 5 ? 1 : index + 1)
        console.log(index)
    }

    return (
        <div className='flex flex-col md:flex-row w-[100%] md:w-[50%] h-[100%] ml-0 md:-ml-20 mt-8 items-center justify-center relative'>
            <img onClick={handleLeftClick} className='absolute w-[9px] md:w-auto left-[6%] md:left-[12%] top-[50%] cursor-pointer' src={leftButton} alt="" />
            <img onClick={handleRightClick} className='absolute w-[9px] md:w-auto right-[6%] md:right-[12%] top-[50%] cursor-pointer' src={rightButton} alt="" />
            {
                index === 1 && <img className='w-auto' src={slider1} alt="" />
            }
            {
                index === 2 && <img className='w-auto' src={slider2} alt="" />
            }
            {
                index === 3 && <img className='w-auto ' src={slider3} alt="" />
            }
            {
                index === 4 && <img className='w-auto' src={slider4} alt="" />
            }
            {
                index === 5 && <img className='w-auto' src={slider5} alt="" />
            }
        </div>
    )
}

export default Slider