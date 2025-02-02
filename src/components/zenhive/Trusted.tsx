import React from 'react'
import logo1 from '@/assets/zenhive/trusted/logo1.svg'
import logo2 from '@/assets/zenhive/trusted/logo2.svg'
import logo3 from '@/assets/zenhive/trusted/logo3.svg'
import logo4 from '@/assets/zenhive/trusted/logo4.svg'
import logo5 from '@/assets/zenhive/trusted/logo5.svg'
import logo6 from '@/assets/zenhive/trusted/logo6.svg'
import logo7 from '@/assets/zenhive/trusted/logo7.svg'
import logo8 from '@/assets/zenhive/trusted/logo8.svg'
import logo9 from '@/assets/zenhive/trusted/logo9.svg'

const Trusted = () => {
    const icons = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9
      ];
    return (
        <section>
            <h3 className='font-pingFangSCRegular font-semibold text-3xl leading-[45px] md:text-[72px] text-white w-full text-center mt-20 md:mt-40'>Trusted Clients and Partners</h3>
            <p className='font-pingFangSCLight text-base tracking-normal md:tracking-normal md:text-xl text-[#ADABB2] text-center mt-10 w-full md:w-[1280px] xl:px-0 md:px-10 px-4 mx-auto'>ZenHive leverages AI-powered data analysis and AIGC technology to analyze consumer behavior, create personalized content, and expand consumer outreach across social media platforms, boosting our distribution channels’ sales conversions effectively and efficiently.</p>

            {/* <div className={`mask-gradient whitespace-nowrap overflow-hidden w-full h-[50px] p-0 mt-10 mb-40 hide-scrollbar`}>
                <div className={`relative mx-auto py-0 my-4 px-0 border-hidden whitespace-normal h-[50px] `}
                >
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay1' src={logo1} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay2' src={logo2} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay3' src={logo3} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay4' src={logo4} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay5' src={logo5} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay6' src={logo6} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay7' src={logo7} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay8' src={logo8} alt='' />
                    <img className='absolute h-[50px] left-[100%] top-0 -translate-y-1/2 md:logo-animation-xl xl:logo-animation logo-animation-md delay9' src={logo9} alt='' />
                </div>
            </div> */}
 <div className="mask-gradient whitespace-nowrap overflow-hidden relative  py-4 xl:mb-40 md:mb-20">
      <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="w-full ml-10 h-[50px] sm:w-16 sm:h-16 md:w-full md:h-[50px] object-contain"
          />
        ))}
        {icons.map((icon, index) => (
          <img
            key={`duplicate-${index}`}
            src={icon}
            alt={`icon-duplicate-${index}`}
            className="w-full  ml-10 h-[50px] sm:w-16 sm:h-16 md:w-full md:h-[50px] object-contain"
          />
        ))}
      </div>
    </div>
        </section>
    )
}

export default React.memo(Trusted)