import React from 'react'
import logo1 from '@/assets/home/content/featured/1.svg'
import logo2 from '@/assets/home/content/featured/2.svg'
import logo3 from '@/assets/home/content/featured/3.svg'
import logo4 from '@/assets/home/content/featured/4.svg'
import FeaturedButton from './FeaturedButton'

const Featured = () => {
  const data = [
    {
      id: 1, 
      logo: logo1,
      link: 'https://finance.yahoo.com/news/azen-protocol-launched-decentralised-marketplace-162000991.html'
    },
    {
      id: 2, 
      logo: logo2,
      link: 'https://www.benzinga.com/pressreleases/24/08/40231397/azen-protocol-launched-the-decentralised-marketplace-for-computing-resources'
    },
    {
      id: 3, 
      logo: logo3,
      link: 'https://apnews.com/press-release/accesswire/data-management-and-storage-fb700f746b19837d0e32c0e36ed68659'
    },
    {
      id: 4, 
      logo: logo4,
      link: 'https://markets.businessinsider.com/news/currencies/azen-protocol-launched-the-decentralised-marketplace-for-computing-resources-1033655124'
    },
  ]
  return (
    <section className='flex flex-col justify-center items-center gap-6 w-full mt-20 mb-20 md:mb-0 md:mt-48'>
      <h2 className='font-pingFangSCRegular font-semibold text-3xl md:text-[72px] md:leading-[72px] tracking-[0.4px] text-center text-white w-full'>Featured On</h2>
      <div className='w-full md:w-[1264px] flex flex-col md:flex-row justify-between gap-5 md:gap-0 items-center mx-auto mt-4 md:mt-10 md:mb-40'>
        {
          data.map((item)=>(
            <FeaturedButton key={item.id} logo={item.logo} link={item.link}/>
          ))
        }
      </div>
    </section>
  )
}

export default React.memo(Featured)