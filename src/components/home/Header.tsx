import logo from '@/assets/home/header/logo.svg'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ContentContainer from '../container/ContentContainer'
import menuIcon from '@/assets/home/header/menu-icon.svg'
import { useDialogContext } from '@/providers/DialogProvider'

const Header = () => {
  const menus = [
    {
      id: 1,
      name: 'ZenHive',
      link: '/zenhive'
    },
    {
      id: 2,
      name: 'Products',
      link: '/product'
    },
    // {
    //   id: 3,
    //   name: 'Protocol',
    //   link: '/protocol'
    // },
    // {
    //   id: 4,
    //   name: 'About',
    //   link: '/about'
    // },
  ]

  const {setShowMenu} = useDialogContext()

  const handleMenuClick = ()=>{
    setShowMenu(true)
  }

  return (
    <ContentContainer>
      <header className='relative z-50 flex justify-between items-center py-8 md:py-7'>
        <div className='flex-1'>
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className='flex-1 hidden md:flex justify-end items-center gap-14'>
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

        <img className='block md:hidden z-10' src={menuIcon} alt="" onClick={handleMenuClick}/>
        {/* <div className='flex-1 flex justify-end items-center gap-3'>
          <a className='bg-gradient-to-r from-[#C0EE02] to-[#90FF6B] text-black text-sm rounded-lg px-8 py-2 font-pingFangSCRegular font-semibold' href="">Login</a>
          <a className='text-white border-2 border-white text-sm rounded-lg px-5 py-2 font-pingFangSCRegular font-semibold' href="">Register</a>
        </div> */}
      </header>
    </ContentContainer>
  )
}

export default React.memo(Header)