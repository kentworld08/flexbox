import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/Data";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 lg:relative z-100 flex items-center justify-between  md:p-6 bg-[#111111] md:bg-transparent px-4">
      <Image src="/logo.png" alt="flexbox logo" height={66} width={161} />

      <div className="hidden lg:flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="transition-colors text-white hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,_#F22801,_#FC9000)] "
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-2 md:gap-4">
        <Button className="bg-transparent hover:bg-white/30 text-white border border-white/30 text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
          1-day trial
        </Button>
        <Button className="bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
          Log in
        </Button>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full"></div>
      </div>

        {/* Mobile Menu Button */}
        
      <div onClick={()=> setOpen((prev)=> !prev)} className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full md:hidden text-white p-2 flex items-center justify-center">A</div>

      <div className= {`${open ? "translate-x-1000": "translate-x-0"} absolute bg-[#111111] top-20 w-full transition-all duration-300 ease-in-out py-5 md:hidden`}>    
         <div className="flex flex-col items-center gap-6  px-6 py-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="transition-colors text-white hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,_#F22801,_#FC9000)] "
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center flex-col gap-2 md:gap-4">
        <Button className="bg-transparent text-white border border-white/30 text-sm  w-40 py-2 rounded-full ">
          1-day trial
        </Button>
        <Button className="bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-white text-sm w-40 py-2 rounded-full border border-transparent">
          Log in
        </Button>
        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
