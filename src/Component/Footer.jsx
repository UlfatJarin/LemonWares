import React from 'react'
import Container from '../layer/Container'
import footerlogo from '../../public/asset/footerlogo.png'

const Footer = () => {
  return (
    <div className='bg-theme'>
        <Container className='max-w-[1221px] py-20'>
            <div className=' grid grid-cols-6 gap-[74px]'>
            <div className='col-span-2'>
                <img src={footerlogo} alt="logo" />
                <p className='pI2 mt-4 !text-base !text-[#E6E6E6]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            </div>
            <div className='flex flex-col gap-6' >
                <h3 className='pI  !text-white'>Service</h3>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Domain</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Shared Hosting</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Cloud Hosting</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Private Hosting</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='pI !text-white'>Hosting</h3>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Cheap Hosting</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Hosting Wordpress</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Email Hosting</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Hosting Unlimited</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='pI !text-white'>Company </h3>
                <p className='pI2 !text-base !text-[#E6E6E6]'>About</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Career</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h3 className='pI !text-white'>Help </h3>
                <p className='pI2 !text-base !text-[#E6E6E6]'>FAQ</p>
                <p className='pI2 !text-base !text-[#E6E6E6]'>Help support</p>
            </div>
            </div>
            <div className='mt-[80px]'>
                <p className='pI !text-white'>Built by Jeremiah with love in Lagos. Copyright 2021</p>
            </div>
           
        </Container>
    </div>
  )
}

export default Footer