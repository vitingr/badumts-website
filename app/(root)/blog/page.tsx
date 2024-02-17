"use client";

import Post from "@/components/Post";
import Sidebar from "@/components/sidebar/Sidebar";
import { infoUser } from "@/contexts/UserContext";
import { PostProps } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdInfoOutline } from "react-icons/md";

const page = () => {
  const { user } = infoUser();

  const [data, setData] = useState<PostProps[]>([]);

  const getAllPosts = async () => {
    try {
      const requisition = await fetch("https://badumts.onrender.com/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await requisition.json();
      setData(response);
    } catch (error) {
      throw new Error("Não foi possível encontrar nenhuma postagem");
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-full flex justify-center sm:gap-12 mt-[125px] sm:mt-[50px] p-6 sm:p-[3%]">
      <section className="max-w-[950px] w-full px-6">
        <div className="bg-blue-50 w-full p-6 flex justify-between gap-6 border border-slate-200 rounded-xl">
          <div className="w-[25px] flex items-center justify-center">
            <MdInfoOutline className="gray-icon" size={25} />
          </div>
          <div className="w-full">
            <h1 className="font-bold">Bem-vindo à nossa plataforma de blog!</h1>
            <p className="text-sm">
              Nessa seção você pode publicar perguntas e respostas relacionadas
              ao dispositivo do badumts, além disso você pode curtir postagens e
              compartilhar algo que achar interessante.
            </p>
          </div>
        </div>

        <div className="flex w-full items-center sm:flex-nowrap flex-wrap py-14">
          <h1 className="text-4xl font-bold w-full">Top Questions</h1>
          <Link href={"/blog/create-post"} className="mt-6 sm:mt-0">
            <button className="Btn">
              <span className="text">Publicar</span>
              <span className="svgIcon">
                <svg
                  fill="white"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>

        <div className="flex gap-4 w-full p-6 border border-slate-200 rounded-xl items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="outline-none w-full border-b border-slate-200 py-2 transition-all duration-300 text-[#626B7F] text-sm"
            placeholder="O que você está procurando?"
            autoComplete="off"
            maxLength={60}
          />
          <GoSearch className="gray-icon cursor-pointer" size={25} />
        </div>

        <div className="mt-16">
          {data.map((post: PostProps, index: number) => (
            <Post
              content={post}
              key={index}
              showAnswerButton={true}
              refetch={getAllPosts}
            />
          ))}
        </div>
      </section>

      <Sidebar />
    </div>
  );
};

export default page;
