import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="fixed bg-white w-full flex justify-center sm:p-6 p-4 z-50">
      <nav className="max-w-[1950px] bg-transparent w-full flex sm:justify-between sm:gap-12">
        <h1 className="sm:w-full flex justify-left sm:justify-center items-center font-bold text-2xl sm:text-3xl text-blue-400 cursor-default">
          badumts
        </h1>
        <ul className="list-none hidden sm:flex justify-center w-full gap-10 items-center">
          <Link
            href={"/"}
            className="text-lg text-[#717171] transition-all duration-300 hover:text-[#3e3e3e] px-4 py-1 rounded-xl hover:bg-[#f8f8f8]"
          >
            Home
          </Link>
          <Link
            href={"/guide"}
            className="text-lg text-[#717171] transition-all duration-300 hover:text-[#3e3e3e] px-4 py-1 rounded-xl hover:bg-[#f8f8f8]"
          >
            Guide
          </Link>
          <Link
            href={"/support"}
            className="text-lg text-[#717171] transition-all duration-300 hover:text-[#3e3e3e] px-4 py-1 rounded-xl hover:bg-[#f8f8f8]"
          >
            Support
          </Link>
          <Link
            href={"/blog"}
            className="text-lg text-[#717171] transition-all duration-300 hover:text-[#3e3e3e] px-4 py-1 rounded-xl hover:bg-[#f8f8f8]"
          >
            Blog
          </Link>
          <Link
            href={"/documentation"}
            className="text-lg text-[#717171] transition-all duration-300 hover:text-[#3e3e3e] px-4 py-1 rounded-xl hover:bg-[#f8f8f8]"
          >
            Documentation
          </Link>
        </ul>
        <div className="w-full flex sm:justify-center justify-end items-center gap-8">
          <UserButton afterSignOutUrl="/" />
          <IoMenuOutline
            size={30}
            className="cursor-pointer gray-icon"
            onClick={() => {}}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
