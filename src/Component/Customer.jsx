import React from 'react'
import Container from '../layer/Container'
import Comment from '../layer/Comment'
import customer1 from '../../public/asset/customer1.png'
import customer2 from '../../public/asset/customer2.png'
import customer3 from '../../public/asset/customer3.png'
import semicolon from '../../public/asset/semicolon.png'
import Serve from '../layer/Serve'


const Customer = () => {
  return (
    <div>
        <Container className='py-10 max-w-[1015px] relative'>
            <div className='grid grid-cols-2 gap-8 '>
                
                <div className=' flex flex-col items-end z-10'>
                <div className='max-w-[445px]'>
                    <h2 className='h2 mb-2'>Real Stories from Real Customers</h2>
                    <p className='pI2'>Get inspired by these stories.</p>
                </div>
                <Comment className='w-[350px]  mt-6 pb-24' src={customer1} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem' customer='Floyd Miles' info='Vice President, CLI' />
                </div>
                

                <div className=''>
                <Comment className='w-[445px] mt-[104px] mb-8 ' src={customer2} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem' customer='Jane Cooper' info='CEO, JPNL' />
                <Comment className='w-[350px] ' src={customer3} comment='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem' customer='Kristin Watson' info='Co-Founder, LeeveOn Branding' />
                </div>
            </div>
            <img className='absolute top-0 left-0 z-0 opacity-50' src={semicolon} alt="semicolon" />
        </Container>
        <Serve/>
    </div>
  )
}

export default Customer