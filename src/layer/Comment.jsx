import React from 'react'
import { PiClipboard } from 'react-icons/pi'
import bsemicolon from '../../public/asset/bluesemicolon.png'

const Comment = ({className,src ,comment,customer,info }) => {
  return (
    <div className={` p-8 pl-16 rounded-lg  boxshadow ${className}`}>
        <img  className='mb-2' src={src} alt={src} />
        <p className='pI2 !text-base mb-6 relative'>{comment}
        <img className='absolute top-0 -left-8' src={bsemicolon} alt="semicolon" /> </p>
        <h5 className='pI !text-lg !text-[#18191F]' > {customer}</h5>
        <p className=' font-Inter font-medium text-sm text-[#969BAB]'> {info}</p>
    </div>
  )
}

export default Comment