"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextEditor from "@/components/config/TextEditor";
import ToastMessage from "@/components/config/ToastMessage";
import { toast } from "react-toastify";
import { infoUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";

// Definição do Schema do Objeto de Formulário
const createPostFormSchema = z.object({
  // Tipagem dos dados vindos do form
  title: z
    .string()
    .min(1, "Digite um título para sua postagem!")
    .transform((title) => {
      return title
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  // content: z
  //   .string()
  //   .min(1, "Digite um conteúdo para a sua postagem!")
  //   .refine((content) => {
  //     return content.length >= 10;
  //   }, "A postagem é muito curta!"),
  topics: z
    .array(
      z.object({
        topic: z.string().min(1, "É obrigatório informar o nome do tópico"),
      })
    )
    .min(2, "Insira pelo menos 2 tópicos referentes à sua postagem")
    .max(5, "Só é possível adicionar 5 tópicos à sua postagem"),
});

type CreatePostFormData = z.infer<typeof createPostFormSchema>;

const page = () => {
  // Declaração dos Contexts
  const { user } = infoUser();
  const router = useRouter();

  // Armazenamento do Spread Operator do Formulário
  const [output, setOutput] = useState<string>("");

  const [content, setContent] = useState<string>("");
  const [currentTopicText, setCurrentTopicText] = useState<string>("");

  // Declaração dos controladores referentes ao Hook de Formulário
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostFormSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "topics",
  });

  async function createPost(data: CreatePostFormData) {
    if (data) {
      try {
        const stringTopics = data.topics.map((item) => item.topic);

        const response = await fetch("https://badumts.onrender.com/post/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            creator: user.id as string,
            title: data.title,
            creatorName: user.name,
            creatorPhoto: user.photo,
            content: content,
            topics: stringTopics,
          }),
        });

        if (response.ok) {
          toast.success("A postagem foi adicionada com sucesso!");
          router.push("/blog");
        } else {
          toast.error("ERRO! Não foi possível criar a postagem");
        }
      } catch (error) {
        toast.error("ERRO! Não foi possível criar a postagem");
      }
    }
  }

  function addNewTag() {
    append({ topic: "" });
  }

  return (
    <div className="w-full flex justify-center sm:gap-20 mt-[125px] sm:mt-[50px] p-6 sm:p-[5%]">
      <ToastMessage />
      <section className="max-w-[950px] w-full px-6 border-x border-neutral-200">
        <h1 className="text-4xl font-bold mb-10">Adicionar Postagem</h1>

        <div className="bg-blue-50 w-full p-6 flex gap-6 border border-neutral-200 rounded-xl">
          <div className="w-full">
            <h1 className="font-bold text-2xl">Escrevendo uma boa pergunta</h1>
            <p className="text-sm mt-4">
              Você está pronto para fazer uma pergunta relacionada ao badumts?
              não se preocupe, este formulário o ajudará a orientá-lo durante o
              processo.
            </p>
            <p className="text-sm mt-4">
              Quer fazer uma pergunta não relacionada ao nosso dispositivo? Veja
              os tópicos aqui para realizar uma postagem mais relevante na
              plataforma.
            </p>

            <h2 className="text-lg font-bold mt-4">Dicas:</h2>
            <li className="ml-1 text-[#626B7F] text-sm">
              Resuma seu problema em um título de uma linha.
            </li>
            <li className="ml-1 text-[#626B7F] text-sm">
              Descreva seu problema com mais detalhes.
            </li>
            <li className="ml-1 text-[#626B7F] text-sm">
              Descreva o que você tentou e o que esperava que acontecesse.
            </li>
            <li className="ml-1 text-[#626B7F] text-sm">
              Adicione “tags” que ajudam a divulgar sua pergunta aos membros da
              comunidade.
            </li>
            <li className="ml-1 text-[#626B7F] text-sm">
              Revise sua pergunta e poste-a no site.
            </li>
          </div>
        </div>

        <form onSubmit={handleSubmit(createPost)} className="w-full">
          <div className="p-6 border border-neutral-200 rounded-xl mt-12">
            <h1 className="text-xl">Título</h1>
            <h2 className="text-[#626B7F] text-sm">
              Seja específico e imagine que você está fazendo uma pergunta a
              outra pessoa.
            </h2>
            <input
              type="text"
              id="title"
              className="outline-none py-2 px-4 border border-neutral-200 w-full rounded-lg mt-6"
              autoComplete="off"
              placeholder="Digite um título para sua postagem"
              minLength={4}
              maxLength={60}
              {...register("title")}
            />
            {errors.title && (
              <span className="text-sm mt-4 ml-2 text-blue-600">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="p-6 border border-neutral-200 rounded-xl mt-12">
            <h1 className="text-xl">Quais são os detalhes do seu problema?</h1>
            <h2 className="text-[#626B7F] text-sm mb-6">
              Seja específico e imagine que você está fazendo uma pergunta a
              outra pessoa.
            </h2>
            <TextEditor value={content} setValue={setContent} />
          </div>

          <div className="p-6 border border-neutral-200 rounded-xl mt-12">
            <div className="flex justify-between w-full items-center">
              <div className="w-full">
                <h1 className="text-xl">Tags</h1>
                <h2 className="text-[#626B7F] text-sm">
                  Adicione de 2 a 5 tags para descrever o assunto da sua
                  pergunta. Comece a digitar para ver sugestões.
                </h2>
              </div>
              <div className="w-full flex justify-end items-center">
                <div
                  className="bg-blue-400 text-white text-center cursor-pointer rounded-xl p-2 transition-all duration-300 hover:bg-blue-500"
                  onClick={() => addNewTag()}
                >
                  Adicionar
                </div>
              </div>
            </div>

            {fields.map((field, index: number) => {
              return (
                <div key={index} className="mt-4">
                  <input
                    type="text"
                    id="title"
                    className="outline-none py-2 px-4 border border-neutral-200 w-full rounded-lg"
                    autoComplete="off"
                    placeholder="Insira aqui uma tag"
                    {...register(`topics.${index}.topic`)}
                  />
                  {errors?.topics?.[index]?.topic && (
                    <span className="text-sm mt-4 ml-2 text-blue-600">
                      {errors.topics?.[index]?.topic?.message}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 px-4 py-3 text-white transition-all duration-300 hover:bg-blue-600 cursor-pointer mt-12 rounded-xl"
          >
            Publicar Postagem
          </button>
        </form>

        <pre>{output}</pre>
      </section>
      <Sidebar />
    </div>
  );
};

export default page;
