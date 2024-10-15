import React from 'react'
import PakageCard from './PakageCard'

const PCard = () => {
  return (
    <div className='grid grid-cols-3'>
      <PakageCard tittle='Starter' Price='$2.80'/>
      <PakageCard tittle='Standard' Price='$4.20'/>
      <PakageCard tittle='Suprem' Price='$7.00'/>

    </div>
  )
}

export default PCard