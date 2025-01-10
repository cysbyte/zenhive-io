import React from 'react'
import logo from '@/assets/zenhive/footer/logo.svg'
import socialLink1 from '@/assets/zenhive/footer/icon1.svg'
import socialLink2 from '@/assets/zenhive/footer/icon2.svg'
import socialLink3 from '@/assets/zenhive/footer/icon3.svg'
import socialLink4 from '@/assets/zenhive/footer/icon4.svg'
import socialLink5 from '@/assets/zenhive/footer/icon5.svg'

const Footer = () => {

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
            link: 'https://medium.com/@azenprotocol',
        },
        {
            id: 4,
            icon: socialLink4,
            link: 'mailto:Support@azenprotocol.io',
        },
        {
            id: 5,
            icon: socialLink5,
            link: 'https://www.linkedin.com/company/azenprotocol/',
        },
    ]

    return (
        <section className='w-full bg-[#151516] py-10 md:py-16'>
            <div className='flex flex-col md:flex-row items-start gap-8 md:gap-0 md:items-end justify-between pb-4 md:pb-14 w-full md:w-[1280px] xl:px-0 px-5 md:px-10 mx-auto border-b border-b-[#71717180]'>
                <div>
                    <h6 className='font-pingFangSCLight text-sm text-white mb-4'>Powered by</h6>
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className='flex justify-center items-center gap-3 mt-2 md:mt-0'>
                    {
                        socialLinks.map((item) => (
                            <a target='_blank' key={item.id} href={item.link}><img src={item.icon} alt="" /></a>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-start md:items-center w-full md:w-[1280px] xl:px-0 px-5 md:px-10 mx-auto py-8 mb-8'>
                <p className='font-pingFangSCLight text-white text-sm'>© 2024 aZen</p>
                <div className='flex justify-end items-center gap-2'>
                    <a target='_blank' className='font-pingFangSCLight text-white text-sm' href="https://azen-protocol.gitbook.io/azen-protocol-litepaper">White Paper</a>
                    <p className='text-white'>|</p>
                    <a target='_blank' className='font-pingFangSCLight text-white text-sm' href=" https://www.azenprotocol.io/privacy-policy.html">Privacy Policy</a>
                </div>
                
            </div>
        </section>
    )
}

export default React.memo(Footer)