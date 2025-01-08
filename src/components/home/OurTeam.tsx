import React from 'react'
import ContentContainer from '../container/ContentContainer'
import awardLogo1 from '@/assets/home/content/our-team/award/1.svg'
import awardLogo2 from '@/assets/home/content/our-team/award/2.svg'
import awardLogo3 from '@/assets/home/content/our-team/award/3.svg'
import awardLogo4 from '@/assets/home/content/our-team/award/4.svg'
import awardLogo5m from '@/assets/home/content/our-team/award/5-m.svg'
import awardLogo5 from '@/assets/home/content/our-team/award/5.svg'
import up from '@/assets/home/content/our-team/award/up.svg'
import academicLogo1 from '@/assets/home/content/our-team/academic/1.svg'
import academicLogo2 from '@/assets/home/content/our-team/academic/2.svg'
import academicLogo3 from '@/assets/home/content/our-team/academic/3.svg'
import academicLogo4 from '@/assets/home/content/our-team/academic/4.svg'
import academicLogo5 from '@/assets/home/content/our-team/academic/5.svg'
import academicLogo6 from '@/assets/home/content/our-team/academic/6.svg'
import academicLogo7 from '@/assets/home/content/our-team/academic/7.svg'
import seperator from '@/assets/home/content/our-team/academic/separator.svg'
import seperatorm from '@/assets/home/content/our-team/academic/separator-m.svg'
import industryLogo1 from '@/assets/home/content/our-team/industry/1.svg'
import industryLogo2 from '@/assets/home/content/our-team/industry/2.svg'
import industryLogo3 from '@/assets/home/content/our-team/industry/3.svg'
import industryLogo4 from '@/assets/home/content/our-team/industry/4.svg'
import industryLogo5 from '@/assets/home/content/our-team/industry/5.svg'
import industryLogo6 from '@/assets/home/content/our-team/industry/6.svg'
import industryLogo7 from '@/assets/home/content/our-team/industry/7.svg'
import industryLogo8 from '@/assets/home/content/our-team/industry/8.svg'


const OurTeam = () => {
    return (
        <ContentContainer>
            <div className='mt-20 md:mt-48'>
                <div className='flex flex-col justify-center items-start gap-6'>
                    <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[72px] tracking-[0.4px] text-center text-white w-full'>Our Team</h2>
                    <p className='font-pingFangSCLight font-normal text-xl text-[#ADABB2] text-center'>Founded in 2010 as a research lab at the University of Auckland, evolving into a multi-million-dollar high-tech Web2 business and launching aZen Protocol as a Web2+Web3 spin-out.</p>
                    <div className='w-full mt-8 md:mt-14'>
                        <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Award-Winning Innovations</h5>
                        <div className='w-full md:w-[1051px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 md:gap-16 mx-auto mt-10'>
                            <img className='h-[20px] md:h-auto' src={awardLogo1} alt="" />
                            <img className='h-[20px] md:h-auto' src={awardLogo2} alt="" />
                            <img className='h-[20px] md:h-auto' src={awardLogo3} alt="" />
                            <img className='h-[20px] md:h-auto' src={awardLogo4} alt="" />
                        </div>
                        <img className='hidden md:block mx-auto mt-10' src={awardLogo5} alt="" />
                        <img className='block md:hidden mx-auto mt-6' src={awardLogo5m} alt="" />
                    </div>
                </div>
                <img className='mx-auto my-10 md:my-12' src={up} alt="" />
                <div className='flex flex-col justify-center items-start gap2 md:gap-6'>
                    <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Academic Excellence</h5>
                    <div className='w-full md:w-[1043px] flex justify-center gap-4 md:gap-0 md:justify-between items-center mx-auto mt-10'>
                        <img className='h-[20px] md:h-auto' src={academicLogo1} alt="" />
                        <img className='h-[20px] md:h-auto' src={academicLogo2} alt="" />
                        <img className='h-[20px] md:h-auto' src={academicLogo3} alt="" />
                        <img className='h-[20px] md:h-auto' src={academicLogo4} alt="" />
                    </div>
                    <div className='w-full md:w-[649px] flex justify-center gap-4 md:gap-0 md:justify-between items-center mx-auto mt-4'>
                        <img className='h-[20px] md:h-auto' src={academicLogo5} alt="" />
                        <img className='h-[20px] md:h-auto' src={academicLogo6} alt="" />
                        <img className='h-[20px] md:h-auto' src={academicLogo7} alt="" />
                    </div>
                </div>
                <img className='hidden md:block mx-auto my-10 md:my-16' src={seperator} alt="" />
                <img className='block md:hidden mx-auto my-10 md:my-16' src={seperatorm} alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <h5 className='font-pingFangSCLight font-normal text-2xl tracking-wide text-white w-full text-center'>Industry Expertise</h5>
                    <div className='w-full md:w-[1051px] flex justify-center gap-4 md:justify-between items-center  mx-auto mt-4 md:mt-10'>
                        <img className='h-[20px] md:h-auto' src={industryLogo1} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo2} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo3} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo4} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo5} alt="" />
                    </div>
                    <div className='w-full md:w-[918px] flex justify-center gap-4 md:justify-between items-center mx-auto mt-42md:mt-10 '>
                        <img className='h-[20px] md:h-auto' src={industryLogo6} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo7} alt="" />
                        <img className='h-[20px] md:h-auto' src={industryLogo8} alt="" />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default React.memo(OurTeam)