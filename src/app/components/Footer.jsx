import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-black flex items-center justify-between backdrop-blur-sm bg-white/50'>
        <Link href={'/'}><Image src={'/logo.png'} alt='logo' width={20} height={20} /></Link>
        <p>© ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer