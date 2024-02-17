"use client";

import Link from "next/link";
import React, { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import {
  IoMenuOutline,
  IoNewspaperOutline,
  IoHomeOutline,
  IoChatbubbleEllipsesOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="fixed bg-blue-900 w-full flex justify-center p-4 z-50 border-b border-[#D8DDE8]">
      <nav className="max-w-[1950px] bg-transparent w-full flex sm:justify-between sm:gap-12">
        <h1 className="sm:w-full flex justify-left tracking-widest sm:justify-center items-center text-2xl font-extrabold text-white uppercase cursor-default">
          Badumts
        </h1>
        <ul className="list-none hidden sm:flex justify-center w-full gap-10 items-center">
          <Link
            href={"/"}
            className="tracking-widest text-sm text-white px-4 py-1 rounded-xl transition-all duration-300 hover:text-blue-50 hover:bg-blue-800"
          >
            Home
          </Link>
          <Link
            href={"/guide"}
            className="tracking-widest text-sm text-white px-4 py-1 rounded-xl transition-all duration-300 hover:text-blue-50 hover:bg-blue-800"
          >
            Guide
          </Link>
          <Link
            href={"/support"}
            className="tracking-widest text-sm text-white px-4 py-1 rounded-xl transition-all duration-300 hover:text-blue-50 hover:bg-blue-800"
          >
            Support
          </Link>
          <Link
            href={"/blog"}
            className="tracking-widest text-sm text-white px-4 py-1 rounded-xl transition-all duration-300 hover:text-blue-50 hover:bg-blue-800"
          >
            Blog
          </Link>
          <Link
            href={"/documentation"}
            className="tracking-widest text-sm text-white px-4 py-1 rounded-xl transition-all duration-300 hover:text-blue-50 hover:bg-blue-800"
          >
            Documentation
          </Link>
        </ul>
        <div className="w-full flex sm:justify-center justify-end items-center gap-8">
          <UserButton afterSignOutUrl="/" />
          <IoMenuOutline
            size={30}
            className="cursor-pointer white-icon"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>

        {showMenu && (
          <div className="z-20 fixed right-0 bg-[#fff] shadow-md h-[605px] sm:h-[600px] w-[350px] border border-[#f7f7f7] translate-y-2 transition-all rounded-lg sm:mt-[25px] mt-[25px] lg:left-[64%]">
            <div className="px-10 py-6">
              <h1 className="text-3xl font-bold text-center">
                Bem-Vindo ao Badumts
              </h1>
            </div>
            <div className="w-full flex gap-4 p-6 bg-[#f7f7f7] items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4529/4529980.png"
                className="w-[50px] h-[50px] selection:bg-transparent"
                alt="Cellphone Image"
              />
              <div>
                <h4 className="text-sm font-bold">
                  Utilize nossa IA de Suporte!
                </h4>
                <p className="text-sm">
                  Precisa de ajuda? experimente o nosso novo recurso, a IA
                  Getúlio! Ela sempre estará disponível para te ajudar.
                </p>
                <Link
                  href={"/support"}
                  className="mt-6 text-blue-400 font-bold text-sm"
                >
                  Beleza
                </Link>
              </div>
            </div>
            <div className="px-10 py-6 sm:gap-7 gap-6 w-full flex flex-col">
              <Link
                href={"/"}
                className="flex w-full justify-between items-center gap-8 cursor-pointer"
                id="home"
                onClick={() => setShowMenu(false)}
              >
                <IoHomeOutline size={27.5} className="gray-icon" />
                <h3 className="w-full text-lg">Início</h3>
              </Link>
              <Link
                href={"/guide"}
                className="flex w-full justify-between items-center gap-8 cursor-pointer"
                id="purchases"
                onClick={() => setShowMenu(false)}
              >
                <IoNewspaperOutline size={27.5} className="gray-icon" />
                <h3 className="w-full text-lg">Guia</h3>
              </Link>
              <Link
                href={"/support"}
                className="flex w-full justify-between items-center gap-8 cursor-pointer"
                id="coupons"
                onClick={() => setShowMenu(false)}
              >
                <MdOutlineSupportAgent size={27.5} className="gray-icon" />
                <h3 className="w-full text-lg">Suporte</h3>
              </Link>
              <Link
                href={"/blog"}
                className="flex w-full justify-between items-center gap-8 cursor-pointer"
                id="profile"
                onClick={() => setShowMenu(false)}
              >
                <IoChatbubbleEllipsesOutline
                  size={27.5}
                  className="gray-icon"
                />
                <h3 className="w-full text-lg">Blog</h3>
              </Link>
              <Link
                href={"/documentation"}
                className="flex w-full justify-between items-center gap-8 cursor-pointer"
                id="profile"
                onClick={() => setShowMenu(false)}
              >
                <IoDocumentsOutline size={27.5} className="gray-icon" />
                <h3 className="w-full text-lg">Documentação</h3>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
