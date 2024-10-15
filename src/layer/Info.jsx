import React from 'react'

const Info = ({src,h3,p}) => {
  return (
    <div className='flex flex-col  items-center text-center max-w-[259px]'>
        <img className={`rounded-full w-[100px] h-[100px]`} src={src} alt={src} />
        <h3 className={`h3 mt-3 mb-1`}>{h3}</h3>
        <p className={`font-Poppins font-light text-xs text-black`}>{p}</p>

    </div>
  )
}

export default Info