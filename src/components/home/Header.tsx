import React from 'react'
import ContentContainer from '../container/ContentContainer'
import logo from '@/assets/home/header/logo.svg'

const Header = () => {
  const menus = [
    {
      id: 1,
      name: 'ZenHive',
    },
    {
      id: 2,
      name: 'Products',
    },
    {
      id: 3,
      name: 'Protocol',
    },
    {
      id: 4,
      name: 'About',
    },
  ]
  return (
    <ContentContainer>
      <header className='relative z-50 flex justify-between items-center py-6'>
        <div className='flex-1'>
          <img src={logo} alt="" />
        </div>
        <div className='flex-1 flex justify-center items-center gap-14'>
          {
            menus.map((item) => (
              <a className='text-[#D4D8DBA0] font-pingFangSCRegular text-sm font-normal' key={item.id} href="">{item.name}</a>
            ))
          }
        </div>
        <div className='flex-1 flex justify-end items-center gap-3'>
          <a className='bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] text-black text-sm rounded-lg px-8 py-2 font-pingFangSCRegular font-semibold' href="">Login</a>
          <a className='text-white border-2 border-white text-sm rounded-lg px-5 py-2 font-pingFangSCRegular font-semibold' href="">Register</a>
        </div>
      </header>
    </ContentContainer>
  )
}

export default React.memo(Header)