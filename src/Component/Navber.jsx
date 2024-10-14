import React from 'react'
import Container from '../layer/Container'
import logo from '../../public/asset/Logo.png'
import { FiPhone } from "react-icons/fi"

const Navber = () => {
  return (
    <div className='py-10'>
        <Container className='flex justify-between items-center'>
            <img src={logo} alt="logo" />
                <h5 className='h5'>Our Services</h5>
            <div className='flex gap-8' >
                <h5 className='h5'>About </h5>
                <h5 className='h5'>Blog&News</h5>
                <h5 className='h5'>Contact </h5>
            </div>
            <div className='flex gap-8 items-center'>
                <h5 className='h5'>Account</h5>
                <div className='w-[1px] h-5 bg-[#DAD8D8]'></div>
                <div className='flex items-center gap-1.5'>
                    <FiPhone className='text-xl text-theme' />
                    <h5 className='h5'>+2349067322844</h5>
                </div>
            </div>

        </Container>

    </div>
  )
}

export default Navber