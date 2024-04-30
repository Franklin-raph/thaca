import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const aboutUsLinks = [
    {
      label:"About Thaka",
      url:"#"
    },
    {
      label:"Privacy Policy",
      url:"#"
    },
    {
      label:"Terms of use",
      url:"#"
    },
    {
      label:"Return Policy",
      url:"#"
    }
  ]

  const serviceLinks = [
    {
      label:"Pricing",
      url:"#"
    },
    {
      label:"Discounts",
      url:"#"
    },
    {
      label:"Report a Bug",
      url:"#"
    }
  ]


  return (
    <div className='bg-primary-color text-white'>
      <div className='flex items-start justify-between md:flex-row flex-col gap-[2rem] md:gap-[5rem] mt-[2rem] py-[3rem] lg:px-[6rem] px-8'>
        <div className='w-full'>
          <Link to="/" className='mb-5 block'>
            Logo.
          </Link>
          <p className='text-[14px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum repellat 
            aspernatur vitae beatae impedit neque nesciunt provident, quam itaque aliquid optio 
            pariatur quos dolorum sequi excepturi ut necessitatibus! Dolore.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-[2rem] w-full text-[12px]'>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] mb-2'>About Us</h1>
            <ul>
              {aboutUsLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-[15px] md:text-[17px] mb-2'>Our Services</h1>
            <ul>
              {serviceLinks.map(link => (
                <li className='py-1 text-[12px] md:text-[14px]'>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <Link>
            <i class="ri-facebook-circle-line"></i>
          </Link>
          <Link>
            <i class="ri-twitter-x-line"></i>
          </Link>
          <Link>
            <i class="ri-instagram-line"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer