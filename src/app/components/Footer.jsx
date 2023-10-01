import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-24 md:h-24 p-5 lg:px-20 xl:px-40 text-black flex items-center justify-between backdrop-blur-sm bg-white/50'>
        <Link href={'/'}><div className=" h-8 w-8 relative "><Image src={'/logo.png'} alt='logo' sizes="(max-width: 768px) 100vw" fill className=" object-contain" /></div></Link>
        <p className='flex flex-col items-end'>© ALL RIGHTS RESERVED. </p>
        
    </div>
  )
}

export default Footer