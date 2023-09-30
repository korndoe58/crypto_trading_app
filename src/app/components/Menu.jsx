"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, title: "Trade", url: "/" },
  { id: 2, title: "Guilds", url: "/data" },
  { id: 3, title: "Trading Guilds ", url: "/chart" },
  { id: 4, title: "why SCoin", url: "/buy" },
  { id: 5, title: "Institutions", url: "/buy" },


];

const Menu = () => {
   const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
    <Image
      src={open ? "/close.svg" : "/open.svg"}
      alt=""
      width={20}
      height={20}
      onClick={() => setOpen(!open)}
      className="cursor-pointer"
    />
    {open && (
      <div className=" overflow-y-hidden backdrop-blur-sm bg-white/50 text-black font-semibold absolute left-0 bottom-0 w-full h-[calc(100vh-4rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10 ">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}

        <Link
          href={user ? "/trade" : "login"}
          onClick={() => setOpen(false)}
        >
          {user ? "trade" : "Login"}
        </Link>
        <div className="  flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="language"
            name="language"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          >
            <option>TH</option>
            <option>EN</option>
            <option>CH</option>
          </select>
        </div>

      </div>
    )}
  </div>
  )
}

export default Menu