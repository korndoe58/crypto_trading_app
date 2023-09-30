import Link from 'next/link'
import React from 'react'
import Menu from './Menu'


const Navbar = () => {
  return (
    <div className='w-full h-16  p-4 flex justify-between items-center uppercase md:h-24 lg:px-20 xl:px-40   '>
        {/* logo */}
        <div className="text-[#0d0b06] font-bold text-xl md:font-bold  md:text-center">
            <Link href={'/'}>KDCOIN</Link>
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