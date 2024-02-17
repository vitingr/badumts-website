import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed bg-blue-900 w-full flex justify-center p-4 z-50 border-b border-[#D8DDE8]">
      <nav className="max-w-[1950px] bg-transparent w-full flex sm:justify-between sm:gap-12">
        <h1 className="sm:w-full tracking-widest flex justify-left sm:justify-center items-center text-2xl cursor-default uppercase font-extrabold text-white">
          Badumts
        </h1>
        <ul className="list-none hidden sm:flex justify-center w-full gap-10 items-center">
          <Link
            href={"/"}
            className="tracking-widest text-sm text-white transition-all duration-300 hover:text-blue-50 hover:bg-blue-800 px-4 py-1 rounded-xl"
          >
            Home
          </Link>
          <Link
            href={"/guide"}
            className="tracking-widest text-sm text-white transition-all duration-300 hover:text-blue-50 hover:bg-blue-800 px-4 py-1 rounded-xl"
          >
            Guide
          </Link>
          <Link
            href={"/support"}
            className="tracking-widest text-sm text-white transition-all duration-300 hover:text-blue-50 hover:bg-blue-800 px-4 py-1 rounded-xl"
          >
            Support
          </Link>
          <Link
            href={"/blog"}
            className="tracking-widest text-sm text-white transition-all duration-300 hover:text-blue-50 hover:bg-blue-800 px-4 py-1 rounded-xl"
          >
            Blog
          </Link>
          <Link
            href={"/documentation"}
            className="tracking-widest text-sm text-white transition-all duration-300 hover:text-blue-50 hover:bg-blue-800 px-4 py-1 rounded-xl"
          >
            Documentation
          </Link>
        </ul>
        <div className="w-full flex sm:justify-center justify-end items-center sm:gap-8 gap-4">
          <Link
            href={"/sign-in"}
            className="text-white cursor-pointer text-sm transition-all duration-300 sm:border sm:border-white rounded-2xl text-center py-2 sm:px-3 px-2 sm:w-[150px]"
          >
            Login
          </Link>
          <Link
            href={"/sign-up"}
            className="bg-white text-blue-900 rounded-2xl text-center py-2 sm:px-3 px-2 cursor-pointer text-sm transition-all duration-300 hover:bg-blue-900 hover:text-white sm:w-[150px]"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
