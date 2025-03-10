import React from 'react'
import Container from '../layer/Container'
import cloudflare from '../../public/asset/pay/cloudflare.png'
import softaculous from '../../public/asset/pay/softaculous.png'
import litespeed from '../../public/asset/pay/litespeed.png'
import Imunify from '../../public/asset/pay/Imunify.png'
import eordpress from '../../public/asset/pay/eordpress.png'
import cPanel from '../../public/asset/pay/cPanel.png'
import uptime from '../../public/asset/uptime.png'
import support from '../../public/asset/support.png'
import webhosting from '../../public/asset/webhosting.png'
import certificate from '../../public/asset/certificate.png'
import Info from '../layer/Info'

const Hosting = () => {
    return (
        <div >
            <Container className='max-w-[1284px] py-20'>
                <div className='grid grid-cols-2 mb-10'>
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

                <div className='grid grid-cols-4 pt-12'>
                    <Info src={uptime} h3='99.9% Uptime' p='We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'/>
                    <Info src={webhosting} h3='Blazing Fast Web Hosting' p='We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'/>
                    <Info src={certificate} h3='Free SSL Certificates' p='We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'/>
                    <Info src={support} h3='24x7 Friendly Support' p='We Keep Your Web build Online 24x7x365.
Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'/>
                </div>

            </Container>

        </div>
    )
}

export default Hosting