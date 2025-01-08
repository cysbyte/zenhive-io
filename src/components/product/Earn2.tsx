import React from 'react'
import ContentContainer from '../container/ContentContainer'
import icon1 from '@/assets/product/earn2/icon1.svg'
import icon2 from '@/assets/product/earn2/icon2.svg'
import icon3 from '@/assets/product/earn2/icon3.svg'

const Earn2 = () => {
    const data = [
        {
            id: 1,
            title: 'Download the DePIN Light app on your Android phone.',
            desc: 'Download the DePIN Light app on your Android phone.',
            icon: icon1,
        },
        {
            id: 2,
            title: "Earn aZen rewards during your phone's idle time or using an idle device.",
            desc: 'The more you share, the more $aZen tokens you’ll receive.',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Soon available on PCs and other devices.',
            desc: 'Invite friends to multiply your $aZen token rewards.',
            icon: icon3,
        },
    ]
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-[40px] leading-[60px] md:text-[72px] md:leading-[100px] text-white mt-20 md:mt-40 w-full text-center'>Earn $aZen with DePIN Lite</h2>
        <div className='flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 gap-10 md:gap-14 h-auto md:h-[260px]'>
            {
                data.map((item)=>(
                    <div key={item.id} className='border border-[#454645] rounded-2xl px-8 py-12 md:p-8 flex-1 h-[260px] w-full md:h-full'>
                        <img src={item.icon} alt="" />
                        <h5 className='font-pingFangSCLight text-2xl text-white pt-7'>{item.title}</h5>
                    </div>
                ))
            }
        </div>
    </ContentContainer>
  )
}

export default React.memo(Earn2)