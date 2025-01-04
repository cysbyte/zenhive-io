import React from 'react'
import ContentContainer from '../container/ContentContainer'
import application from '@/assets/home/content/application.svg'

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
            <h2 className='font-inter text-[72px] leading-[76px] tracking-[0.4px] font-semibold text-white mt-[11rem] w-full text-center'>Stack Depiction</h2>
            <div className='flex justify-between items-center h-[714px] gap-32 mt-[5rem]'>
                <img src={application} alt="" />
                <div className='w-[488px] flex flex-col justify-between h-full'>
                    {
                        applicationData.map((item) => (
                            <div key={item.id} className='border border-[#ADABB240] rounded-lg px-6 py-[3.6rem]'>
                                <h3 className='font-pingFangSCRegular font-semibold text-2xl tracking-[0.4px] text-white'>{item.title}</h3>
                                <p className='font-pingFangSCLight font-light text-base text-[#ADABB2A0] mt-4'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(Content)