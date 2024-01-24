"use client";

import React, { useState } from "react";
import Configuration from "openai";
import OpenAIApi from "openai";

const page = () => {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<any>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
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

    setIsLoading(false);
    setResult(response.choices[0]);
  };

  return (
    <div className="max-w-[500px] w-full">
      <h1 className="text-lg">O que você gostaria de perguntar?</h1>
      <div className="flex gap-4 items-end w-full justify-between">
        <input
          type="text"
          name="question"
          id="question"
          className="outline-none w-full border-neutral-200 border-b transition-all duration-300 focus:border-blue-300 py-2 px-2 mt-2"
          autoComplete="off"
          placeholder="Digite algo"
          onChange={(e) => {
            setIsLoading(true);
            setQuery(e.target.value);
          }}
        />

        <button
          onClick={() => handleClick()}
          className="bg-blue-500 text-white rounded-xl py-1 px-3 cursor-pointer"
        >
          Enviar
        </button>
      </div>
      {isLoading && (
        <div className="mt-6 w-full text-justify text-[#717171]">
          Carregando...
        </div>
      )}
      <div className="mt-6 w-full text-justify text-[#717171]">
        {result && result.message && result.message.content}
      </div>
    </div>
  );
};

export default page;
