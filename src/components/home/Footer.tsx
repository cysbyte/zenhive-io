import React from 'react'
import logo from '@/assets/home/footer/logo.svg'
import socialLink1 from '@/assets/home/footer/social-links/1.svg'
import socialLink2 from '@/assets/home/footer/social-links/2.svg'
import socialLink3 from '@/assets/home/footer/social-links/3.svg'
import socialLink4 from '@/assets/home/footer/social-links/4.svg'

const Footer = () => {

    const about = ['Our Story', 'Press & Blogs', 'Media Kit']
    const products = [
        {id: 1, name: 'aZen Hub', positionScrollTo: 'azen-hub'},
        {id: 2, name: 'aZen DePIN Lite', positionScrollTo: 'azen-depin-lite'},
        {id: 3, name: 'ZenHive', positionScrollTo: 'zenhive'},
    ]

    const downloads = [
        {id: 1, name: 'aZen Hub for iOS', link: 'https://apps.apple.com/us/app/azen-connect/id6476482774'},
        {id: 2, name: 'aZen Hub for Android', link: 'https://play.google.com/store/apps/details?id=com.azen.manager'},
        {id: 3, name: 'aZen DePIN Lite for Android', link: 'https://play.google.com/store/apps/details?id=com.azen.client&pli=1'},
    ]

    const socialLinks = [
        {
            id: 1,
            icon: socialLink1,
            link: 'https://x.com/azen_protocol',
        },
        {
            id: 2,
            icon: socialLink2,
            link: 'https://t.me/azenprotocol',
        },
        {
            id: 3,
            icon: socialLink3,
            link: 'https://www.linkedin.com/company/azenprotocol/',
        },
        {
            id: 4,
            icon: socialLink4,
            link: 'https://medium.com/@azenprotocol',
        },
    ]

    const handleScrollTo = (position: string) => {
        const section = document.getElementById(position);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

  return (
    <section className=' bg-[#151516] pt-6 md:pt-12 pb-10 md:pb-60'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-[1280px] mx-auto px-6 md:px-10 xl:px-0'>
            <div className='w-full md:w-[430px]'>
                <img src={logo} alt="" />
                <p className='font-pingFangSCLight font-normal text-sm text-white md:text-[#999999] mt-4 tracking-wide'>aZen Protocol is transforming computing resources into dynamic fractional NFTs, scheduled by smart contracts to build the future of DePIN for universal computing.</p>
            </div>

            <div className='flex md:flex-row flex-col justify-center items-start gap-10 md:gap-14 mt-10 md:mt-0'>
                <div className='flex-col justify-start md:justify-center items-start gap-1 hidden'>
                    <h6 className='font-pingFangSCLight font-normal text-sm text-white mb-4'>About</h6>
                    {
                        about.map((item, index)=>(
                            <a className='font-pingFangSCLight font-normal text-[12px] leading-[30px] text-[#999999]' key={index} href="">{item}</a>
                        ))
                    }
                </div>
                <div className='flex flex-col justify-start md:justify-center items-start gap-1'>
                    <h6 className='font-pingFangSCLight font-normal text-sm text-white mb-4'>Products</h6>
                    {
                        products.map((item)=>(
                            <button className='font-pingFangSCLight font-normal text-[12px] leading-[30px] text-[#999999]' key={item.id} onClick={()=>handleScrollTo(item.positionScrollTo)}>{item.name}</button>
                        ))
                    }
                </div>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <h6 className='font-pingFangSCLight font-normal text-sm text-white mb-4'>Downloads</h6>
                    {
                        downloads.map((item)=>(
                            <a className='font-pingFangSCLight font-normal text-[12px] leading-[30px] text-[#999999]' target='_blank' key={item.id} href={item.link}>{item.name}</a>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {
                        socialLinks.map((item)=>(
                            <a key={item.id} target='_blank' href={item.link}><img src={item.icon} alt="" /></a>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-[1280px] px-6 gap-4 md:gap-0 md:px-10 xl:px-0 mx-auto py-8 border-t-[0.5px] border-t-[#717171] mt-16'>
            {/* <p className='font-pingFangSCLight font-normal text-sm text-white md:text-[#999999]'>© 2024 aZen Protocol. All Rights Reserved.</p> */}
            <p className='font-pingFangSCLight font-normal text-sm text-white md:text-[#999999]'> </p>
            <a className='font-pingFangSCLight font-normal text-sm text-white md:text-[#999999]' href="">Terms of Use |  Privacy Policy</a>
        </div>
    </section>
  )
}

export default React.memo(Footer)