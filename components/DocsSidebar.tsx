import React from "react";
import {
  IoHome,
  IoChatbubbleEllipsesOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { HiLightningBolt } from "react-icons/hi";
import { GrHelpBook } from "react-icons/gr";
import { HiPuzzlePiece } from "react-icons/hi2";
import { LuCombine } from "react-icons/lu";
import { FaHandPointUp } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiNestjs,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiOpenai,
  SiSwiper,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";

const DocsSidebar = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <div className={`h-full overflow-y-scroll w-full max-w-[350px] px-12 sm:relative absolute bg-white ${showMenu ? "block" : "hidden" }`}>
      <ul className="list-none border-b border-[#D8DDE8] pb-4 mt-6">
        <h2 className="text-xl mb-2">Início</h2>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <IoHome className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Home</p>
        </li>
      </ul>
      <ul className="list-none border-b border-[#D8DDE8] py-4 my-4">
        <h2 className="text-xl mb-2">Montagem</h2>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <HiPuzzlePiece className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Componentes básicos</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <GrHelpBook className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Manual de montagem</p>
        </li>
      </ul>
      <ul className="list-none border-b border-[#D8DDE8] py-4 my-4">
        <h2 className="text-xl mb-2">Referências</h2>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <HiLightningBolt className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Conexões do aparelho</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <LuCombine className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Integrações extras</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <FaHandPointUp className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Uso Correto</p>
        </li>
      </ul>
      <ul className="list-none border-b border-[#D8DDE8] py-4 my-4">
        <h2 className="text-xl mb-2">Ajuda</h2>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <IoNewspaperOutline className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Guia do usuário</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <MdOutlineSupportAgent
            className="gray-icon cursor-default"
            size={14}
          />
          <p className="font-500 text-[#626B7F]">IA Suporte</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <IoChatbubbleEllipsesOutline
            className="gray-icon cursor-default"
            size={14}
          />
          <p className="font-500 text-[#626B7F]">Blog de Perguntas</p>
        </li>
      </ul>
      <ul className="list-none border-b border-[#D8DDE8] py-4 my-4">
        <h2 className="text-xl mb-2">Tecnologias</h2>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <TbBrandNextjs className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Nextjs</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiNestjs className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Nestjs</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <BiLogoTypescript className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Typescript</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <BiLogoNodejs className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Node</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiReact className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">React</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiTailwindcss className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Tailwindcss</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <FaSass className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Sass</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <TbBrandPrisma className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Prisma</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiMongodb className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">MongoDB</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiOpenai className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">OpenAI</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiSwiper className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Swiper</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiRender className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Render</p>
        </li>
        <li className="flex gap-4 items-center transition-all duration-300 cursor-pointer py-1 px-2 rounded-xl hover:bg-[#F0F4F9]">
          <SiVercel className="gray-icon cursor-default" size={14} />
          <p className="font-500 text-[#626B7F]">Vercel</p>
        </li>
      </ul>
    </div>
  );
};

export default DocsSidebar;
