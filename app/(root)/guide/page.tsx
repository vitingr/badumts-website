import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 sm:p-[5%]">
      <section className="mt-20 sm:mt-0 max-w-[1250px] w-full bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl sm:p-20 p-10 flex flex-col items-center sm:flex-nowrap flex-wrap">
        <span className="text-2xl font-extrabold uppercase mt-10 sm:mt-0 text-blue-300">Features</span>
        <h1 className="text-4xl font-bold mt-2 text-center text-white">Nosso guia para você</h1>
        <p className="text-center mt-10 max-w-[450px] text-white">
          Nessa seção você poderá conferir todas as informações relacionadas ao
          nosso dispositivo, além disso, tudo que é necessário para utiliza-lô
          está contido aqui
        </p>

        <button className="cta">
          <span>Conferir</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </section>

      <section className="mt-[175px] max-w-[1250px] w-full p-6 sm:p-10">
        <div className="flex justify-between w-full gap-12 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <div className="flex flex-col">
              <h3 className="text-lg">Introdução</h3>
              <div className="my-2 border-t-2 border-blue-300 w-[45px]" />
              <h1 className="mt-3 font sm:text-[72px] text-4xl sm:text-6xl cursor-default">
                O que é
              </h1>
              <h1 className="font sm:text-[72px] text-4xl sm:text-6xl sm:-mt-4 cursor-default">
                o BADUMTS?.
              </h1>
            </div>
            <h2 className="sm:text-xl text-[#626B7F] max-w-[450px] mt-4">
              Neste guia, forneceremos todas as informações necessárias para
              montar, configurar e utilizar o dispositivo de forma eficaz!
              Materiais:
            </h2>

            <div className="mt-12">
              <div className="flex flex-col gap-3">
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>Arduíno (modelo específico)</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Lista de componentes]</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Links para fornecedores]</p>
                </li>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <Image
              alt="Main Image"
              src={"/assets/music.svg"}
              width={300}
              height={300}
              className="selection:bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section className="mt-[175px] max-w-[1250px] w-full p-6 sm:p-10">
        <div className="flex justify-between w-full gap-12 sm:flex-nowrap flex-wrap">
          <div className="w-full flex items-center justify-center">
            <Image
              alt="Main Image"
              src={"/assets/manual.svg"}
              width={300}
              height={300}
              className="selection:bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col items-end">
              <h3 className="text-lg">Montagem</h3>
              <div className="my-2 border-t-2 border-blue-300 w-[45px]" />
              <h1 className="mt-3 font sm:text-[72px] text-4xl sm:text-6xl cursor-default text-right">
                Instruções
              </h1>
              <h1 className="font sm:text-[72px] text-4xl sm:text-6xl sm:-mt-4 cursor-default text-right">
                de Montagem.
              </h1>
            </div>
            <h2 className="sm:text-xl text-[#626B7F] w-full mt-4 text-right">
              Montar o nosso dispositivo é um processo extremamente simples e
              empolgante. Siga os passos abaixo para garantir uma montagem
              bem-sucedida do seu produto:
            </h2>

            <div className="mt-12">
              <div className="flex flex-col gap-3 items-end">
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>Arduíno (modelo específico)</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Lista de componentes]</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Links para fornecedores]</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[175px] max-w-[1250px] w-full p-6 sm:p-10">
        <div className="flex justify-between w-full gap-12 sm:flex-nowrap flex-wrap">
          <div className="w-full">
            <div className="flex flex-col">
              <h3 className="text-lg">Conexão</h3>
              <div className="my-2 border-t-2 border-blue-300 w-[45px]" />
              <h1 className="mt-3 font sm:text-[72px] text-4xl sm:text-6xl cursor-default">
                Conexões e
              </h1>
              <h1 className="font sm:text-[72px] text-4xl sm:text-6xl sm:-mt-4 cursor-default">
                Configuração
              </h1>
            </div>
            <h2 className="sm:text-xl text-[#626B7F] max-w-[450px] mt-4">
              Antes de ligar e conectar o seu dispositivo, certifique-se de
              seguir as etapas corretas para conexão e configuração Conecte o
              dispositivo no nosso esquema e carregue o respectivo código fonte
              fornecido para aquele aparelho:
            </h2>

            <div className="mt-12">
              <div className="flex flex-col gap-3">
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>Arduíno (modelo específico)</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Lista de componentes]</p>
                </li>
                <li className="list-none flex gap-2 items-center">
                  <Image
                    alt="Icon"
                    src={"/assets/correct.svg"}
                    width={25}
                    height={25}
                  />
                  <p>[Links para fornecedores]</p>
                </li>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <Image
              alt="Main Image"
              src={"/assets/connect.svg"}
              width={300}
              height={300}
              className="selection:bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
