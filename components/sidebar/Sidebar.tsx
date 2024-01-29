import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="max-w-[350px] w-full hidden sm:flex flex-col gap-6">
      <div className="w-full border border-neutral-200 p-4 rounded-xl">
        <h1 className="pb-2 mb-2 border-b border-neutral-200 font-bold text-xl">
          Tags Favoritas
        </h1>
        <p className="mt-2 text-[#626B7F]">
          Selecione algumas tags para acompanhar posts e dúvidas relacionadas ao
          tema desejado.
        </p>
        <div className="w-full text-center mt-8 text-blue-500 cursor-pointer transition-all duration-300 hover:text-blue-600">
          Selecionar tags
        </div>
      </div>
      <div className="w-full border border-neutral-200 p-4 rounded-xl">
        <h1 className="pb-2 mb-2 border-b border-neutral-200 font-bold text-xl">
          Tags Ignoradas
        </h1>
        <p className="mt-2 text-[#626B7F]">
          Selecione algumas tags nas quais posts e dúvidas relacionadas ao tema
          sejam ocultados.
        </p>
        <div className="w-full text-center mt-8 text-blue-500 cursor-pointer transition-all duration-300 hover:text-blue-600">
          Selecionar tags
        </div>
      </div>
      <div className="w-full border border-neutral-200 p-4 rounded-xl">
        <h1 className="pb-2 mb-2 border-b border-neutral-200 font-bold text-xl">
          Nossa IA de Suporte
        </h1>
        <p className="mt-2 text-[#626B7F] text-justify">
          Precisando de ajuda? de uma olha na nossa nova IA de suporte ao
          usuário, chamada Getúlio. Com ela é possível tirar suas dúvidas sobre
          os mais diversos temas. É uma grande conquista para a nossa equipe
          conseguir proporcionar essas features aos nossos usuários
        </p>
        <div className="w-full text-center mt-8">
          <Link href={"/support"} className="text-blue-500 cursor-pointer transition-all duration-300 hover:text-blue-600">Conferir</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
