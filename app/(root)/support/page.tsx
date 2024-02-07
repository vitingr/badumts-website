"use client";

import React, { useState } from "react";
import OpenAIApi from "openai";
import Sidebar from "@/components/sidebar/Sidebar";
import AiChat from "@/components/AiChat";

const page = () => {
  const [query, setQuery] = useState<string>("");

  const [chats, setChats] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setChats((prevChats) => [...prevChats, { text: query, creator: "user" }]);

    const openai = new OpenAIApi({
      organization: "org-Kb5gEsPmCrl1G5lAbrFXMdN9",
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    const response: any = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: query }],
      max_tokens: 150,
    });

    setChats((prevChats) => [
      ...prevChats,
      { text: response.choices[0].message.content, creator: "ai" },
    ]);

    setQuery("");
    setIsLoading(false);
  };

  return (
    <div className="w-full flex justify-center gap-20 mt-[125px] sm:mt-[50px] p-6 sm:p-[5%]">
      <section className="max-w-[850px] w-full">
        <h1 className="text-4xl font-bold">
          O que você gostaria de perguntar?
        </h1>
        <h3 className="text-[#626B7F] mt-2">
          Bem-Vindo ao nosso menu de suporte, aqui você pode tirar algumas de
          suas dúvidas com a nossa inteligência artificial chamada Getúlio, bom
          uso!
        </h3>
        <div className="flex gap-4 items-end w-full justify-between mt-20">
          <input
            type="text"
            name="question"
            id="question"
            className="outline-none w-full border-neutral-200 border-b transition-all duration-300 focus:border-blue-300 py-2 px-2 mt-2"
            autoComplete="off"
            value={query}
            placeholder="Digite aqui qual é a sua dúvida"
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            onClick={() => {
              setIsLoading(true);
              handleClick();
            }}
            className="bg-blue-500 text-white rounded-xl py-1 px-3 cursor-pointer"
          >
            Enviar
          </button>
        </div>
        {isLoading && (
          <div className="my-8 w-full flex justify-center items-center text-justify text-[#626B7F]">
            <div className="dot-spinner">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          </div>
        )}
        {chats.length > 0 ? (
          <>
            {chats.map((chat: any, index: number) => (
              <AiChat chat={chat} />
            ))}
          </>
        ) : (
          <p className="w-full text-center text-lg text-[#626B7F] mt-16">
            Você ainda não possui nenhuma conversa com Getúlio, que tal iniciar
            uma?
          </p>
        )}
      </section>
      <Sidebar />
    </div>
  );
};

export default page;
