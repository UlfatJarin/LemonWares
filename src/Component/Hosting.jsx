import React from 'react'
import Container from '../layer/Container'
import cloudflare from '../../public/asset/pay/cloudflare.png'
import softaculous from '../../public/asset/pay/softaculous.png'
import litespeed from '../../public/asset/pay/litespeed.png'
import Imunify from '../../public/asset/pay/Imunify.png'
import eordpress from '../../public/asset/pay/eordpress.png'
import cPanel from '../../public/asset/pay/cPanel.png'

const Hosting = () => {
  return (
    <div >
        <Container className='max-w-[1284px] py-10'>
            <div className='grid grid-cols-2'>
                <div>
                    <h2 className='h2'>True Cloud Web  Hosting</h2>
                    <p className=' font-Inter text-lg leading-8 text-[#18191F] mt-2 max-w-[573px]'>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                </div>
                <div className='grid grid-cols-3 '>
                    <img src={cPanel} alt="pay6" />
                    <img src={Imunify} alt="pay5" />
                    <img src={litespeed} alt="pay3" />
                    <img src={softaculous} alt="pay2" />
                    <img src={eordpress} alt="pay4" />
                    <img src={cloudflare} alt="pay1" />
                </div>

            </div>
            <div className='grid grid-cols-4'>
                

            </div>

        </Container>

    </div>
  )
}

export default Hosting