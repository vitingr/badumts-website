"use client";

import Person from "@/components/Person";
import { group_members } from "@/constants/group";
import { HighlighProps, PersonProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/common/motion";
import { useInView } from "react-intersection-observer";
import Highlight from "@/components/Highlight";
import { HIGHLIGHTS } from "@/constants/highlights";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      <motion.section
        variants={slideInFromTop()}
        className="w-full flex justify-between sm:flex-nowrap flex-wrap gap-12 max-w-[1250px] p-6 sm:p-10"
      >
        <div className="w-full">
          <div className="flex flex-col">
            <h1 className="font-bold tracking-wide sm:text-[72px] text-4xl sm:text-5xl cursor-default">
              Bem-Vindo
            </h1>
            <h1 className="font-bold tracking-wide sm:text-[72px] text-4xl sm:text-5xl sm:-mt-2 cursor-default">
              ao BADUMTS.
            </h1>
          </div>
          <h2 className="sm:text-lg text-[#626B7F] max-w-[450px] mt-4">
            Bem-vindo ao universo aonde não existe o impossível! quem não ouve a
            melodia acha maluco quem dança, faça parte!
          </h2>

          <div className="mt-12">
            <div className="flex gap-6">
              <li className="list-none flex gap-2 items-center">
                <Image
                  alt="Icon"
                  src={"/assets/correct.svg"}
                  width={25}
                  height={25}
                  className="selection:bg-transparent"
                />
                <p className="sm:text-base text-sm">
                  Colocar algo nesse campo aqui
                </p>
              </li>
              <li className="list-none flex gap-2 items-center">
                <Image
                  alt="Icon"
                  src={"/assets/correct.svg"}
                  width={25}
                  height={25}
                  className="selection:bg-transparent"
                />
                <p className="sm:text-base text-sm">
                  Colocar algo nesse campo aqui
                </p>
              </li>
            </div>
            <div className="flex gap-6 mt-3">
              <li className="list-none flex gap-2 items-center">
                <Image
                  alt="Icon"
                  src={"/assets/correct.svg"}
                  width={25}
                  height={25}
                  className="selection:bg-transparent"
                />
                <p className="sm:text-base text-sm">
                  Colocar algo nesse campo aqui
                </p>
              </li>
              <li className="list-none flex gap-2 items-center">
                <Image
                  alt="Icon"
                  src={"/assets/correct.svg"}
                  width={25}
                  height={25}
                  className="selection:bg-transparent"
                />
                <p className="sm:text-base text-sm">
                  Colocar algo nesse campo aqui
                </p>
              </li>
            </div>
          </div>

          <div className="flex justify-between gap-6 items-center max-w-[450px] w-full mt-14">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg text-center py-2 px-4 cursor-pointer text-sm sm:text-lg transition-all duration-300 hover:bg-blue-700 w-full">
              See our Features
            </div>
            <div className="text-blue-800 cursor-pointer text-sm sm:text-lg transition-all duration-300 hover:text-blue-500 w-full text-center">
              See more
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Image
            alt="Main Image"
            src={"/assets/main.svg"}
            width={300}
            height={300}
            className="selection:bg-transparent transition-all duration-300 hover:scale-105"
          />
        </div>
      </motion.section>

      <h1 className="mt-[5.2em] mb-20 w-full text-center font-[500] text-5xl cursor-default p-6">
        Eai,{" "}
        <span className="font-[600] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">
          Que tal fazer
        </span>{" "}
        um pouco de
        <span className="font-[600] text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6C47FF] to-[#5BC5EF]">
          {" "}
          barulho
        </span>{" "}
        por aí?
      </h1>

      <motion.section
        variants={slideInFromTop()}
        className="mt-[150px] flex gap-12 justify-between sm:flex-nowrap flex-wrap w-full max-w-[1250px] p-6 sm:p-10"
      >
        <div className="w-full">//imagem do produto</div>
        <div className="w-full">
          <h1 className="text-4xl font-bold">Nosso Projeto</h1>
          <p className="text-justify sm:mt-2 sm:text-lg text-base mt-4 sm:text-[#3e3e3e] text-[#626B7F]">
            Nosso projeto possui como sua principal finalidade a oportunidade de
            proporcionar a possibilidade de qualquer pessoa adquirir um
            instrumento musical, promovendo a acessibilidade das pessoas no
            âmbito musical e artístico
          </p>

          <div className="flex gap-2 items-center text-lg text-[#626B7F] mt-10">
            <pre className="text-blue-500 bg-blue-200 rounded-full px-4 py-1 text-sm">#badumts</pre>
            <pre className="text-blue-500 bg-blue-200 rounded-full px-4 py-1 text-sm">#façabarulho</pre>
            <pre className="text-blue-500 bg-blue-200 rounded-full px-4 py-1 text-sm">#musica</pre>
          </div>

          <div className="mt-10 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 text-center rounded-xl transition-all duration-300 hover:bg-blue-700 cursor-pointer">
            Quero saber mais
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={slideInFromTop()}
        className="w-full mt-[150px] p-6 sm:p-10 flex justify-center items-center gap-12 sm:flex-nowrap flex-wrap"
      >
        {HIGHLIGHTS.map((item: HighlighProps, index: number) => (
          <Highlight key={index} content={item} />
        ))}
      </motion.section>

      <motion.section
        variants={slideInFromTop()}
        className="w-full bg-blue-900 mt-[250px] p-20 flex flex-col items-center rounded-md"
      >
        <h1 className="text-center text-4xl text-blue-300 font-bold cursor-default">
          Downloads e Arquivos
        </h1>
        <h2 className="text-white text-4xl text-center font-bold">
          Baixe aqui tudo que você precisa
        </h2>

        <h2 className="text-white text-base mt-10 text-center font-light">
          Nessa seção você terá acesso a tudo que é necessário para usufruir do
          nosso produto
        </h2>

        <div className="mt-20 flex gap-20 justify-between max-w-[650px] w-full sm:flex-nowrap flex-wrap">
          <div className="flex flex-col items-center w-full">
            <button className="download-btn">
              <svg
                id="download"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"></path>
              </svg>
            </button>
            <h2 className="text-white text-3xl font-bold text-center my-2">Peças</h2>
            <h3 className="mb-12 text-center text-white">
              Clique no botão acima para baixar o material relacionado ao
              respectivo tópico informado
            </h3>

            <div className="w-full border-b border-[#ffffff93] py-4 p-4">
              <span className="text-zinc-300 text-center">tamanho: 16mb</span>
              <h3 className="text-lg text-white">Catálogo de peças PVC</h3>
            </div>

            <div className="w-full border-b border-[#ffffff93] py-4 p-4">
              <span className="text-zinc-300 text-center">tamanho: 4mb</span>
              <h3 className="text-lg text-white">Quantitativo em tabela</h3>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <button className="download-btn">
              <svg
                id="download"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"></path>
              </svg>
            </button>
            <h2 className="text-white text-3xl font-bold text-center my-2">
              Manual
            </h2>
            <h3 className="mb-12 text-center text-white">
              Clique no botão acima para baixar o material relacionado ao
              respectivo tópico informado
            </h3>

            <div className="w-full border-b border-[#ffffff93fff93] py-4 p-4">
              <span className="text-zinc-300 text-center">tamanho: 24mb</span>
              <h3 className="text-lg text-white">Manual de instalação</h3>
            </div>

            <div className="w-full border-b border-[#ffffff93] py-4 p-4">
              <span className="text-zinc-300 text-center">tamanho: 26mb</span>
              <h3 className="text-lg text-white">Manual de montagem</h3>
            </div>

            <div className="w-full border-b border-[#ffffff93] py-4 p-4">
              <span className="text-zinc-300 text-center">tamanho: 30mb</span>
              <h3 className="text-lg text-white">Configuração do Arduino</h3>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: animationDelay }}
        className="mt-[125px] max-w-[1250px] mb-[250px] p-6 sm:p-10"
      >
        <h1 className="text-center text-4xl font-bold cursor-default">
          Quem Somos?
        </h1>
        <div className="flex flex-wrap w-full gap-12 mt-20 justify-center">
          {group_members.map((person: PersonProps, index: number) => (
            <Person personData={person} index={index} key={index} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
