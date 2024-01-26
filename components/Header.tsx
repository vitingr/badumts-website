import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed bg-white w-full flex justify-center p-6 z-50">
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
          <Link
            href={"/sign-in"}
            className="text-blue-400 cursor-pointer text:text-lg transition-all duration-300 hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            href={"/sign-up"}
            className="bg-blue-400 text-white rounded-lg text-center py-2 sm:px-4 px-2 cursor-pointer text:text-lg transition-all duration-300 hover:bg-blue-500"
          >
            Create Account
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
