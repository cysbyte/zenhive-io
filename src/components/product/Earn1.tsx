import React from 'react'
import ContentContainer from '../container/ContentContainer'
import icon1 from '@/assets/product/earn1/icon1.svg'
import icon2 from '@/assets/product/earn1/icon2.svg'
import icon3 from '@/assets/product/earn1/icon3.svg'

const Earn1 = () => {
    const data = [
        {
            id: 1,
            title: 'Daily Check-in',
            desc: 'Easiest and quickest way to get $aZen tokens.',
            icon: icon1,
        },
        {
            id: 2,
            title: 'Earning Center',
            desc: 'The more you share, the more $aZen tokens you’ll receive.',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Referral Rewards',
            desc: 'Invite friends to multiply your $aZen token rewards.',
            icon: icon3,
        },
    ]
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] md:text-[72px] md:leading-[100px] text-white mt-16 md:mt-40 w-full text-center'>Earn $aZen tokens with aZen Hub</h2>
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 gap-5 md:gap-14'>
            {
                data.map((item)=>(
                    <div key={item.id} className='border border-[#454645] rounded-2xl p-8 flex-1'>
                        <img src={item.icon} alt="" />
                        <h5 className='font-pingFangSCRegular font-medium text-2xl text-white py-4'>{item.title}</h5>
                        <p className='font-pingFangSCLight text-base text-[#ADABB2]'>{item.desc}</p>
                    </div>
                ))
            }
        </div>
    </ContentContainer>
  )
}

export default React.memo(Earn1)