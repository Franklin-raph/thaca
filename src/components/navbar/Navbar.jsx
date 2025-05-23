import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  useEffect(() => {
    const menuOpen = document.querySelector('.ri-menu-3-line')
    const menuClose = document.querySelector('.ri-close-fill')
    const menu = document.querySelector('nav ul')

    menuOpen.addEventListener('click', () =>{
      menu.style.top = '180px'
      menuOpen.style.display = "none"
      menuClose.style.display = "block"
    })

    menuClose.addEventListener('click', () =>{
      menu.style.top = '-180px'
      menuClose.style.display = "none"
      menuOpen.style.display = "block"
    })
  },[])

  return (
    <nav className='flex items-center justify-between shadow-sm fixed w-full bg-white z-10 px-[3rem] md:px-[5rem] py-4'>
      <Link>
        <img src="./images/icon.png" alt="" className='w-[50px]'/>
      </Link>
        <div className="togglers hidden text-[20px]">
          <i class="ri-menu-3-line"></i>
          <i class="ri-close-fill hidden"></i>
        </div>
      <ul className='flex items-center justify-between gap-7 text-[14px] text-gray-600'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='#'>About</Link>
        </li>
        <li>
          <Link to='#'>Services</Link>
        </li>
        <li>
          <Link to='#'>Contact Us</Link>
        </li>
      </ul>
      <Link to="app-section" className='bg-primary-color text-white px-6 py-2 rounded-full font-[500]'>Get App</Link>
    </nav>
  )
}

export default Navbar