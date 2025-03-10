import React from 'react'
import Container from '../layer/Container'
import bgwebsite from '../../public/asset/bgwebsite.png'
import triangle from '../../public/asset/triangle.png'

const Website = () => {
  return (
    <div>
        <Container className='max-w-[1272px ] relative my-10'>
            <img className='cursor-pointer pl-4 pb-10 pr-6' src={bgwebsite} alt="bgwebsite" />
            <img className='absolute w-[72px] h-[72px] bottom-[20%] right-0' src={triangle} alt="1" />
            <img className='absolute w-[40px] h-[40px] top-0 left-[40%]' src={triangle} alt="1" />
            <img className='absolute w-[40px] h-[40px] bottom-[40%] left-0 rotate-90' src={triangle} alt="1" />
        </Container>
    </div>
  )
}

export default Website