"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Data", url: "/data" },
  { id: 3, title: "Chart", url: "/chart" },
  { id: 4, title: "BUY BTC", url: "/buy" },
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
      <div className="bg-black text-white absolute left-0 bottom-0 w-full h-[calc(100vh-7rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}

        <Link
          href={user ? "/orders" : "login"}
          onClick={() => setOpen(false)}
        >
          {user ? "Orders" : "Login"}
        </Link>
      </div>
    )}
  </div>
  )
}

export default Menu