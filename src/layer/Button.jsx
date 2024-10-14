import React from 'react'

const Button = ({className,btntext}) => {
  return (
    
    <button className={`p-3 rounded-lg bg-theme border-2 border-theme text-white ${className}`}>{btntext}</button>
  )
}

export default Button