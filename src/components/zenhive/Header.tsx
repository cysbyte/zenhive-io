import logo from '@/assets/zenhive/header/logo.svg'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ContentContainer from '../container/ContentContainer'

const Header = () => {
  const menus = [
    {
      id: 1,
      name: 'Commercial Applications',
      link: '/'
    },
    {
      id: 2,
      name: 'Contact',
      link: '/'
    },
  ]

  return (
    <ContentContainer>
      <header className='relative z-50 flex justify-between items-center py-6'>
        <div className='flex-1'>
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className='flex-1 flex justify-center items-center gap-14'>
          {
            menus.map((item) => (
              <NavLink
                key={item.id}
                className='text-[#D4D8DBA0] font-pingFangSCRegular text-sm font-normal'
                to={item.link}
                style={({ isActive }) => (isActive ? { color: '#E9FF78' } : { color: '#D4D8DB' })}
              >{item.name}</NavLink>
            ))
          }
        </div>
        <div className='flex-1 flex justify-end items-center gap-3'>
          <a className='bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] text-black text-sm rounded-lg px-3 py-2 font-pingFangSCRegular font-semibold' href="">Connect Wallet</a>
          <a className='text-white border-2 border-white text-sm rounded-lg px-3 py-2 font-pingFangSCRegular font-semibold' href="">Open Dashboard</a>
        </div>
      </header>
    </ContentContainer>
  )
}

export default React.memo(Header)