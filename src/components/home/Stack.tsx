import React from 'react'
import ContentContainer from '../container/ContentContainer'
import bgStack from '@/assets/home/content/bg-stack.svg'
import bgStackM from '@/assets/home/content/bg-stack-m.svg'

const Content = () => {
    const applicationData = [
        {
            id: 1,
            title: 'Application',
            desc: 'Seamlessly integrates cloud and decentralized computing into Web3 and Website applications.',
        },
        {
            id: 2,
            title: 'Depin Layer',
            desc: 'Smart contracts for dfNFT dynamic scheduling and orchestration.',
        },
        {
            id: 3,
            title: 'Protocol Layer',
            desc: 'Transforms diverse computing resources into dynamic fractional dfNFTs.',
        },
    ]
    return (
        <ContentContainer>
            <h2 className='font-inter text-[30px] leading-[45px] md:text-[72px] md:leading-[76px] tracking-[0.4px] font-medium md:font-semibold text-white mt-20 md:mt-[11rem] w-full text-center'>Stack Depiction</h2>
            <div className='flex flex-col md:flex-row justify-between items-center h-auto md:h-[714px] gap-6 md:gap-32 mt-4 md:mt-[5rem]'>
                <img className='hidden md:block' src={bgStack} alt="" />
                <img className='block md:hidden' src={bgStackM} alt="" />
                <div className='w-full md:w-[488px] flex flex-col justify-between h-full gap-5 md:gap-0'>
                    {
                        applicationData.map((item) => (
                            <div key={item.id} className='border border-[#ADABB240] rounded-lg px-6 py-[1.1rem] md:py-[3.6rem]'>
                                <h3 className='font-pingFangSCRegular font-semibold text-2xl tracking-[0.4px] text-white'>{item.title}</h3>
                                <p className='font-pingFangSCLight font-light text-base text-[#ADABB2A0] mt-3 md:mt-4'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(Content)