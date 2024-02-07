import Image from "next/image";
import React from "react";
import {
  HiSparkles,
  HiLightningBolt,
  HiTerminal,
  HiLockClosed,
} from "react-icons/hi";

const DocsHome = () => {
  return (
    <div className="w-full">
      <section className="-full flex flex-col items-center border-b border-[#D8DDE8]">
        <div className="max-w-[1250px] w-full flex justify-between p-10">
          <div className="w-full">
            <h1 className="text-4xl">
              Bem-vindo à <br />
              Nossa documentação
            </h1>
            <h2 className="mt-2 text-[#626B7F] max-w-[375px] w-full">
              Encontre todos os guias, manuais, componentes e integrações que
              você precisa em seu badumts
            </h2>
          </div>
          <div className="w-full flex h-full items-end justify-center">
            <Image
              src={"/assets/docs.svg"}
              alt="Docs Main Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center mt-12 min-h-[40vh]">
        <div className="max-w-[1050px] w-full flex flex-wrap justify-center gap-6">
          <div className="ring-gray-950/[0.05] max-w-[500px] h-[200px] w-full border border-neutral-100 shadow-md rounded-2xl p-6">
            <div>
              <HiLightningBolt size={25} className="cursor-pointer docs-icon" />
            </div>
            <div className="w-full">
              <h1 className="mt-4 text-xl">Quickstarts & Tutorials</h1>
              <p className="text-[#626B7F] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                temporibus explicabo doloribus officiis itaque, tempora magni
                consectetur quibusdam.
              </p>
            </div>
          </div>
          <div className="ring-gray-950/[0.05] max-w-[500px] h-[200px] w-full border border-neutral-100 shadow-md rounded-2xl p-6">
            <div>
              <HiSparkles size={25} className="cursor-pointer docs-icon" />
            </div>
            <div className="w-full">
              <h1 className="mt-4 text-xl">Integration</h1>
              <p className="text-[#626B7F] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                temporibus explicabo doloribus officiis itaque, tempora magni
                consectetur quibusdam officiis itaque, tempora magni.
              </p>
            </div>
          </div>
          <div className="ring-gray-950/[0.05] max-w-[500px] h-[200px] w-full border border-neutral-100 shadow-md rounded-2xl p-6">
            <div>
              <HiTerminal size={25} className="cursor-pointer docs-icon" />
            </div>
            <div className="w-full">
              <h1 className="mt-4 text-xl">API Reference</h1>
              <p className="text-[#626B7F] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                temporibus explicabo doloribus officiis itaque, tempora magni
                consectetur quibusdam officiis itaque, tempora magni.
              </p>
            </div>
          </div>
          <div className="ring-gray-950/[0.05] max-w-[500px] h-[200px] w-full border border-neutral-100 shadow-md rounded-2xl p-6">
            <div>
              <HiLockClosed size={25} className="cursor-pointer docs-icon" />
            </div>
            <div className="w-full">
              <h1 className="mt-4 text-xl">Badumts Security</h1>
              <p className="text-[#626B7F] text-sm mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                temporibus explicabo doloribus officiis itaque, tempora magni
                consectetur quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsHome;
