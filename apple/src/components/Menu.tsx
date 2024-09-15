"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black opacity-95 text-white rounded-md left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link className="bg-black" href="/">iPhone</Link>
          <Link className="bg-black" href="/">Mac</Link>
          <Link className="bg-black" href="/">iPad</Link>
          <Link className="bg-black" href="/">Watch</Link>
          <Link className="bg-black" href="/">HeadPhone</Link>
          <Link className="bg-black" href="/">Accessories</Link>
          {/* <Link className="bg-black" href="/">Cart(1)</Link> */}
        </div>
      )}
    </div>
  );
};

export default Menu;