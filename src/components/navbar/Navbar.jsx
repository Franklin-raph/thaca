import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between shadow-sm fixed w-full bg-white z-10 px-[5rem] py-4'>
      <Link>
        {/* <img src="./vite.svg" alt="" /> */}
        Logo.
      </Link>
      <ul className='flex items-center justify-between gap-7'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
      </ul>
      <button className='bg-primary-color text-white px-6 py-2 rounded-full font-[500]'>Get App</button>
    </nav>
  )
}

export default Navbar