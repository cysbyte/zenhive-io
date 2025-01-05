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
            link: '',
        },
        {
            id: 2,
            icon: socialLink2,
            link: '',
        },
        {
            id: 3,
            icon: socialLink3,
            link: '',
        },
        {
            id: 4,
            icon: socialLink4,
            link: '',
        },
        {
            id: 5,
            icon: socialLink5,
            link: '',
        },
    ]

    return (
        <section className='w-full bg-[#151516] py-16'>
            <div className='flex items-end justify-between pb-14 w-[1280px] xl:px-0 px-10 mx-auto border-b border-b-[#71717180]'>
                <div>
                    <h6 className='font-pingFangSCLight text-sm text-white mb-4'>Powered by</h6>
                    <img src={logo} alt="" />
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {
                        socialLinks.map((item) => (
                            <a key={item.id} href={item.link}><img src={item.icon} alt="" /></a>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-between items-center w-[1280px] xl:px-0 px-10 mx-auto py-8 mb-8'>
                <p className='font-pingFangSCLight text-white text-sm'>© 2024 aZen Protocol</p>
                <a className='font-pingFangSCLight text-white text-sm' href="">White Paper |  Privacy Policy</a>
            </div>
        </section>
    )
}

export default React.memo(Footer)