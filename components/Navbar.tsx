import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/Data";

const Navbar = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between  md:p-6">
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

      <div className="flex items-center gap-2 md:gap-4">
        <Button className="bg-transparent hover:bg-white/30 text-white border border-white/30 text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
          1-day trial
        </Button>
        <Button className="bg-[linear-gradient(to_right,_#F22801,_#FC9000)] text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-full">
          Log in
        </Button>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-400 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;
