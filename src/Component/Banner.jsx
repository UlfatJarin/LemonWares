import React from 'react'
import Container from '../layer/Container'
import Tabsant from '../layer/Tabsant'
import Button from '../layer/Button'
import banner from '../../public/asset/Banner.jpg'
import triangle from '../../public/asset/triangle.png'

const Banner = () => {
    return (

        <Container className='flex justify-between max-w-[1215px]  py-10'>
            <div className='grid grid-cols-2 '>
                <div>
                    <Tabsant />
                    <p className='max-w-[448px] font-Inter text-[#808080] pt-8 pb-12'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                    <Button className='p bttn !text-white mr-6' btntext='Create an Account ' />
                    <Button className='!bg-transparent !border-black !text-black' btntext='Choose your plan' />

                </div>
                <div className=' flex justify-end'>
                    <div className='p-6  relative max-w-[552px]'>
                        <div className='w-[501px] h-[504px] !object-cover  '>
                            <img className='' src={banner} alt="banner" />
                        </div>
                        <div className='absolute bottom-12  right-0'>
                            <img className='w-[72px] h-[72px]' src={triangle} alt="triangle" />
                        </div>
                        <div className='absolute top-12  right-0'>
                            <img className='w-[40px] h-[40px]' src={triangle} alt="triangle" />
                        </div>
                        <div className='absolute top-[60%] left-0 rotate-90'>
                            <img className='w-[40px] h-[40px]' src={triangle} alt="triangle" />
                        </div>
                    </div>

                </div>
            </div>


        </Container>


    )
}

export default Banner