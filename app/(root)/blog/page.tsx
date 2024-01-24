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
      const requisition = await fetch("http://localhost:3030/post", {
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
    <div className="w-full flex justify-center sm:gap-20 mt-[125px] sm:mt-[50px] p-2">
      <section className="max-w-[950px] w-full px-6 border-x border-neutral-200">
        <div className="bg-blue-50 w-full p-6 flex justify-between gap-6 border border-neutral-200 rounded-xl">
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
          <Link
            href={"/blog/create-post"}
            className="bg-blue-400 text-white rounded-xl h-[40px] cursor-pointer w-[150px] p-4 flex items-center justify-center transition-all duration-300 hover:bg-blue-500 mt-4 sm:mt-0"
          >
            Publicar
          </Link>
        </div>

        <div className="flex gap-4 w-full p-6 border border-neutral-200 rounded-xl items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="outline-none w-full border-b border-neutral-200 py-2 transition-all duration-300 text-[#717171] text-sm"
            placeholder="O que você está procurando?"
            autoComplete="off"
            maxLength={60}
          />
          <GoSearch className="gray-icon cursor-pointer" size={25} />
        </div>

        <div className="mt-16">
          {data.map((post: PostProps, index: number) => (
            <Post content={post} key={index} showAnswerButton={true} />
          ))}
        </div>
      </section>

      <Sidebar />
    </div>
  );
};

export default page;
