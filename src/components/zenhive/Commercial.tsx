import React from 'react'
import ContentContainer from '../container/ContentContainer'
import icon1 from '@/assets/zenhive/commercial/icon1.svg'
import icon2 from '@/assets/zenhive/commercial/icon2.svg'
import icon3 from '@/assets/zenhive/commercial/icon3.svg'
import bg from '@/assets/zenhive/commercial/bg.svg'

const Commercial = () => {
    const data = [
        {
            id: 1,
            title: 'Data Collection',
            desc1: '"Gather user interactions"',
            desc2: '"Track clicks and behaviors"',
            icon: icon1,
        },
        {
            id: 2,
            title: 'AI Analysis',
            desc1: '"Uncover patterns and trends"',
            desc2: '"Generate actionable insights"',
            icon: icon2,
        },
        {
            id: 3,
            title: 'Content Delivery',
            desc1: '"Target the right audience"',
            desc2: '"Deliver personalized experiences"',
            icon: icon3,
        },
    ]
  return (
    <ContentContainer>
        <h2 className='font-pingFangSCRegular font-semibold text-[72px] leading-[100px] text-white w-full text-center'>Commercial Applications</h2>
        <h6 className='font-pingFangSCRegular font-semibold text-5xl w-full text-center text-white mt-14 mb-8'>Social Commerce</h6>
        <p className='font-pingFangSCLight text-xl text-[#ADABB2] w-full text-center mt-6'>ZenHive collects user behavior data from social platforms, applies AI to analyze insights and patterns, and delivers personalized content to the right audience, driving consistent revenue growth.  </p>
        <div className='w-full flex justify-between items-center mt-32'>
            {
                data.map((item)=>(
                    <div key={item.id} className='w-[400px] h-[228px] flex flex-col justify-center items-center relative'>
                        <img className='absolute left-0 top-0 border border-[#454645] rounded-lg overflow-hidden' src={bg} alt="" />
                        <img className='z-10 -mt-24' src={item.icon} alt="" />
                        <h5 className='z-10 font-pingFangSCRegular text-white text-2xl mt-6 mb-4'>{item.title}</h5>
                        <p className='z-10 font-pingFangSCLight text-[#ADABB2] text-xl'>{item.desc1}</p>
                        <p className='z-10 font-pingFangSCLight text-[#ADABB2] text-xl'>{item.desc2}</p>
                    </div>
                ))
            }
        </div>
    </ContentContainer>
  )
}

export default React.memo(Commercial)