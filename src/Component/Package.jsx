import React from 'react'
import Container from '../layer/Container'
import Switchant from '../layer/Switchant'
import Button from '../layer/Button'
import TabPackageAnt from '../layer/TabPackageAnt'
import PakageCard from '../layer/PakageCard'

const Package = () => {
    return (
        <div>
            <Container className='max-w-[1097px] py-10 '>
                <div className='flex flex-col items-center  '>
                    <h2 className='title'>Ready to get started with
                        Lemon Wares? </h2>
                    <p className=' text-[25px] text-black mt-9 mb-16'>Choose the package that suits you</p>
                    <div className='flex  gap-7 items-center'>
                        <h3>Monthly</h3>
                        <Switchant />
                        <h3>Yearly</h3>
                        <Button className='bg-[#FFE87A] border-none p-2 !text-black' btntext='20%  discount' />
                    </div>
                </div>
                <div>
                    <TabPackageAnt/>
                </div>

            </Container>
        </div>
    )
}

export default Package