import React from 'react'
import Container from './Container'
import customer1 from '../../public/asset/customer1.png'
import customer2 from '../../public/asset/customer2.png'
import customer3 from '../../public/asset/customer3.png'
import customer4 from '../../public/asset/customer4.png'
import customer5 from '../../public/asset/customer5.png'
import customer6 from '../../public/asset/customer6.png'

const Serve = () => {
  return (
    <div>
        <Container className='max-w-[1194px] flex justify-between py-12'>
            <div className='max-w-[445px]'>
                <h2 className='h2'>We serve over 100
                Nigerian Websites</h2>
                <p className='pI2'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>

            </div>
            <div className='max-w-[490px] grid grid-cols-3 items-center gap-x-16'>
                <img src={customer1} alt="1" />
                <img src={customer2} alt="2" />
                <img src={customer3} alt="3" />
                <img src={customer4} alt="4" />
                <img src={customer5} alt="5" />
                <img src={customer6} alt="6" />

            </div>


        </Container>
    </div>
  )
}

export default Serve