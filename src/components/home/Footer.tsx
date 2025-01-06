import React from 'react'
import logo from '@/assets/home/footer/logo.svg'
import socialLink1 from '@/assets/home/footer/social-links/1.svg'
import socialLink2 from '@/assets/home/footer/social-links/2.svg'
import socialLink3 from '@/assets/home/footer/social-links/3.svg'
import socialLink4 from '@/assets/home/footer/social-links/4.svg'

const Footer = () => {

    const about = ['Our Story', 'Press & Blogs', 'Media Kit']
    const products = ['aZen Connect', 'aZen DePIN Lite', 'ZenHive']
    const downloads = [
        {id: 1, name: 'aZen Connect for iOS', link: 'https://apps.apple.com/us/app/azen-connect/id6476482774'},
        {id: 2, name: 'aZen Connect for Android', link: 'https://play.google.com/store/apps/details?id=com.azen.manager'},
        {id: 3, name: 'aZen DePIN Lite for Android', link: ''},
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

  return (
    <section className=' bg-[#151516] pt-12 pb-60'>
        <div className='flex justify-between items-center w-[1280px] mx-auto px-10 xl:px-0'>
            <div className='w-[430px]'>
                <img src={logo} alt="" />
                <p className='font-pingFangSCLight font-normal text-sm text-[#999999] mt-4'>aZen Protocol is transforming computing resources into dynamic fractional NFTs, scheduled by smart contracts to build the future of DePIN for universal computing.</p>
            </div>

            <div className='flex justify-center items-start gap-14 '>
                <div className='flex-col justify-center items-start gap-1 hidden'>
                    <h6 className='font-pingFangSCLight font-normal text-sm text-white mb-4'>About</h6>
                    {
                        about.map((item, index)=>(
                            <a className='font-pingFangSCLight font-normal text-[12px] leading-[30px] text-[#999999]' key={index} href="">{item}</a>
                        ))
                    }
                </div>
                <div className='flex flex-col justify-center items-start gap-1'>
                    <h6 className='font-pingFangSCLight font-normal text-sm text-white mb-4'>Products</h6>
                    {
                        products.map((item, index)=>(
                            <a className='font-pingFangSCLight font-normal text-[12px] leading-[30px] text-[#999999]' key={index} href="">{item}</a>
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
        <div className='flex justify-between items-center w-[1280px] px-10 xl:px-0 mx-auto py-8 border-t-[0.5px] border-t-[#717171] mt-16'>
            <p className='font-pingFangSCLight font-normal text-sm text-[#999999]'>© 2024 aZen Protocol. All Rights Reserved.</p>
            <a className='font-pingFangSCLight font-normal text-sm text-[#999999]' href="">Terms of Use |  Privacy Policy</a>
        </div>
    </section>
  )
}

export default React.memo(Footer)