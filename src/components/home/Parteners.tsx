import React from 'react'
import web3Logo1 from '@/assets/home/content/partners/web3/1.svg'
import web3Logo2 from '@/assets/home/content/partners/web3/2.svg'
import web3Logo3 from '@/assets/home/content/partners/web3/3.svg'
import web3Logo4 from '@/assets/home/content/partners/web3/4.svg'
import seperator from '@/assets/home/content/our-team/academic/separator.svg'
import seperatorm from '@/assets/home/content/our-team/academic/separator-m.svg'

import layer1Logo1 from '@/assets/home/content/partners/layer1/1.svg'
import layer1Logo2 from '@/assets/home/content/partners/layer1/2.svg'
import layer1Logo3 from '@/assets/home/content/partners/layer1/3.svg'
import layer1Logo4 from '@/assets/home/content/partners/layer1/4.svg'
import layer1Logo5 from '@/assets/home/content/partners/layer1/5.svg'

import backerLogo1 from '@/assets/home/content/partners/ backers/1.svg'
import backerLogo2 from '@/assets/home/content/partners/ backers/2.svg'
import backerLogo3 from '@/assets/home/content/partners/ backers/3.svg'
import backerLogo4 from '@/assets/home/content/partners/ backers/4.svg'
import backerLogo5 from '@/assets/home/content/partners/ backers/5.svg'

const Parteners = () => {
    return (
        <section className='w-full mt-20 md:mt-40'>
            <div className='flex flex-col justify-center items-center gap-6 w-full'>
                <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[72px] tracking-[0.4px] text-center text-white w-full'>Partners / Backers</h2>
                <div className='w-full mt-4 md:mt-14'>
                    <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Web3 Grants</h5>
                    <div className='w-full md:w-[1051px] flex justify-between items-center md:gap-16 mx-auto mt-10'>
                        <img className='h-[20px] md:h-auto' src={web3Logo1} alt="" />
                        <img className='h-[20px] md:h-auto' src={web3Logo2} alt="" />
                        <img className='h-[20px] md:h-auto' src={web3Logo3} alt="" />
                        <img className='h-[20px] md:h-auto' src={web3Logo4} alt="" />
                    </div>
                </div>
            </div>
            <img className='hidden md:block mx-auto my-10 md:my-16' src={seperator} alt="" />
            <img className='block md:hidden mx-auto my-10 md:my-16' src={seperatorm} alt="" />

            <div className='w-full mt-4 md:mt-14'>
                <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Layer1 Stake-to-Own Partnership </h5>
                <div className='w-full md:w-[1204px] flex justify-between items-center mx-auto mt-10'>
                    <img className='h-[20px] md:h-auto' src={layer1Logo1} alt="" />
                    <img className='h-[20px] md:h-auto' src={layer1Logo2} alt="" />
                    <img className='h-[20px] md:h-auto' src={layer1Logo3} alt="" />
                    <img className='h-[20px] md:h-auto' src={layer1Logo4} alt="" />
                    <img className='h-[20px] md:h-auto' src={layer1Logo5} alt="" />
                </div>
            </div>
            
            <img className='hidden md:block mx-auto my-10 md:my-16' src={seperator} alt="" />
            <img className='block md:hidden mx-auto my-10 md:my-16' src={seperatorm} alt="" />

            <div className='w-full mt-20'>
                <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Backers & Investment Partners </h5>
                <p className='font-pingFangSCLight font-normal text-base w-full text-center text-[#999999] mt-2'>Over $70Million in Equity and Token Investment</p>
                <div className='w-full md:w-[1204px] flex justify-between items-center  md:gap-16 mx-auto mt-10'>
                    <img className='h-[20px] md:h-auto' src={backerLogo1} alt="" />
                    <img className='h-[20px] md:h-auto' src={backerLogo2} alt="" />
                    <img className='h-[20px] md:h-auto' src={backerLogo3} alt="" />
                    <img className='h-[20px] md:h-auto' src={backerLogo4} alt="" />
                    <img className='h-[20px] md:h-auto' src={backerLogo5} alt="" />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Parteners)