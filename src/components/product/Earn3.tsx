import React from 'react'
import ContentContainer from '../container/ContentContainer'
import PrimeHost from './PrimeHost'
import Nano from './Nano'
import ZenHiveEdge from './ZenHiveEdge'

const Earn3 = () => {
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[100px] text-white mt-40 w-full text-center'>Earn $aZen tokens via ZenHive</h2>
        <p className='font-pingFangSCLight text-xl text-[#D4D8DB] w-full text-center mt-4'>Get ZenHive — Connect, Stake, and Start Mining $aZen Tokens</p>
        <PrimeHost/>
        <Nano/>
        <ZenHiveEdge/>
    </ContentContainer>
  )
}

export default React.memo(Earn3)