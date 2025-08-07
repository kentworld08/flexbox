import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/Data";

const Navbar = () => {
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
        <Image
          src="https://i.pravatar.cc/150?img=3"
          alt="User Avatar"
          width={48}
          height={48}
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-md"
        />
      </div>

      <MobileMenu />
    </nav>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 md:hidden"
        aria-label="Toggle Menu"
      >
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      <div
        className={`${
          open ? "translate-x-0 block" : "translate-x-1000 hidden"
        } absolute bg-[#111111] top-20 w-full transition-all duration-300 ease-in-out py-5 md:hidden left-0 right-0 `}
      >
        <div className="flex flex-col items-center gap-6  px-6 py-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="inline-block transition-colors text-white hover:text-transparent hover:bg-clip-text hover:bg-[linear-gradient(to_right,_#F22801,_#FC9000)]"
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
    </>
  );
};

export default Navbar;
