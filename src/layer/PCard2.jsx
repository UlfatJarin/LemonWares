import React from 'react'
import PakageCard from './PakageCard'

const PCard2 = () => {
  return (
    <div className='grid grid-cols-3'>
      <PakageCard tittle='Premium' Price='$2.80'/>
      <PakageCard tittle='Premium' Price='$4.20'/>

    </div>
  )
}

export default PCard2