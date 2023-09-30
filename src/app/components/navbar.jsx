import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='w-full h-16 border-b-[1px] border-t-[1px]  p-4 flex justify-between items-center uppercase md:h-24 lg:px-20 xl:px-40   '>
        {/* logo */}
        <div className="text-[#0d0b06] font-bold text-xl md:font-bold  md:text-center">
            <Link className=' flex gap-2' href={'/'}><Image src={'/logo.png'} alt='logo' width={20} height={20} /></Link>
        </div>
        {/*mobile munu */}
        <div className="md:hidden">
            <Menu/>
        </div>
        {/* right LINKS */}
        <div className="hidden md:flex gap-4 ">
            <Link href="/">Homepage</Link>
            <Link href="/data">Data</Link>
            <Link href="/chart">Chart</Link>
            <Link href="/buybtc">BUY BTC NOW</Link>

        </div>


    </div>
  )
}

export default Navbar