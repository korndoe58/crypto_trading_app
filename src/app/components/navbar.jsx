import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'


const Navbar = () => {
  const user = false;
  return (
    <div className='w-full h-16 border-b-[1px] border-white/10   p-4 flex justify-between items-center uppercase md:h-18 md:px-10 lg:px-20  xl:px-40 xl:h-24   '>
        {/* logo */}
        <div className="text-[#0d0b06] font-bold text-xl md:font-bold  md:text-center">
            <Link className=' flex gap-2' href={'/'}><Image src={'/logo.png'} alt='logo' width={20} height={20} /></Link>
        </div>
        {/*mobile munu */}
        <div className="md:hidden">
            <Menu/>
        </div>
        {/* right LINKS */}
        <div className="hidden  md:flex text-sm gap-4 ">
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/">Trade</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/Guilds">Guilds</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/chart">Trading Guilds</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/chart">why SCoin</Link>
            <Link className='px-3 py-2 rounded-xl hover:backdrop-blur-sm hover:bg-white/30' href="/buybtc">Institutions</Link>

            {/* lang */}
            <div className="  flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="language"
                name="language"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
              >
                <option>TH</option>
                <option>EN</option>
                <option>CH</option>
              </select>
            </div>

        </div>


    </div>
  )
}

export default Navbar