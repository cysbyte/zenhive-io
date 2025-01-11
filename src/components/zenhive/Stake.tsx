import React from 'react'
import ContentContainer from '../container/ContentContainer'
import logo1 from '@/assets/zenhive/stake/logo1.svg'
import logo2 from '@/assets/zenhive/stake/logo2.svg'
import logo3 from '@/assets/zenhive/stake/logo3.svg'
import logo4 from '@/assets/zenhive/stake/logo4.svg'
import logo5 from '@/assets/zenhive/stake/logo5.svg'
import logo6 from '@/assets/zenhive/stake/logo6.svg'

const Stake = () => {
  return (
    <ContentContainer>
         <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[100px] text-white w-full text-center'>Stake-to-Own with <br/>Web3 Strategic Partners</h2>
         <p className='font-pingFangSCLight text-base md:text-xl text-[#ADABB2] w-full text-center mt-6'>Stake industry-leading tokens to earn ZenHive, retaining your original tokens while gaining a valuable new asset. </p>
         <div className='flex justify-between items-center mt-16 '>
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo1} alt="" />
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo2} alt="" />
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo3} alt="" />
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo4} alt="" />
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo5} alt="" />
            <img className='h-[20px] xl:ml-10 md:h-auto w-1/6' src={logo6} alt="" />
         </div>
    </ContentContainer>
  )
}

export default React.memo(Stake)