"use client";

import Post from "@/components/Post";
import HtmlContent from "@/components/config/HtmlContent";
import Popup from "@/components/config/Popup";
import TextEditor from "@/components/config/TextEditor";
import ToastMessage from "@/components/config/ToastMessage";
import Sidebar from "@/components/sidebar/Sidebar";
import { infoUser } from "@/contexts/UserContext";
import { PostProps } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const { user } = infoUser();

  // Posts Content
  const [postData, setPostData] = useState<PostProps>();
  const [childPosts, setChildPosts] = useState<PostProps[]>([]);

  const [showCreatePost, setShowCreatePost] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");

  // Query Parameters from URL
  const pathname = usePathname().split("/");
  const query = pathname[3];

  // Get All The Post Data and Resposts based on the query
  async function getPostData() {
    try {
      const requisition = await fetch(`http://localhost:3030/post/${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await requisition.json();
      setPostData(response);
    } catch (error) {
      throw new Error("Não foi possível encontrar a publicação que você busca");
    }
  }

  async function getAllChildPosts() {
    try {
      const requisition = await fetch(
        `http://localhost:3030/post/postChild/${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (requisition) {
        const response = await requisition.json();
        setChildPosts(response);
      }
    } catch (error) {
      throw new Error(
        "Não foi possível encontrar encontrar postagens relacionadas no banco de dados"
      );
    }
  }

  async function createPost() {
    try {
      if (query != "") {
        const response = await fetch("http://localhost:3030/post/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            creator: user.id as string,
            parent: postData?.id,
            title: "Resposta",
            creatorName: user.name,
            creatorPhoto: user.photo,
            content: content,
            topics: postData?.topics,
          }),
        });

        if (response.ok) {
          toast.success("A sua resposta foi adicionada ao thread da postagem.");
          setShowCreatePost(false);
          await getAllChildPosts();
        }
      } else {
        toast.error("Não é possível postar uma resposta em branco!");
      }
    } catch (error) {
      toast.error("Não foi possível adicionar uma resposta a essa postagem.");
    }
  }

  useEffect(() => {
    if (query) {
      getPostData();
    }
  }, []);

  useEffect(() => {
    if (query) {
      getAllChildPosts();
    }
  }, [postData]);

  return (
    postData &&
    postData.id !== "" && (
      <div className=' className="w-full flex justify-center sm:gap-12 mt-[125px] sm:mt-[50px] p-2"'>
        <ToastMessage />
        <section className="max-w-[950px] w-full px-6 border-x border-neutral-200">
          <h1 className="text-4xl font-bold">Postagem</h1>
          <h2 className="text-lg">
            Aqui você pode tirar uma dúvida em alguma postagem já realizada ou
            responder o usuário da postagem abaixo
          </h2>
          <div className="mt-12 p-4 rounded-xl border border-neutral-200">
            <div className="flex justify-between gap-4">
              <Image
                alt="Profile Picture"
                src={postData?.creatorPhoto || ""}
                width={40}
                height={40}
                className="w-[40px] h-[40px] rounded-full transition-all duration-300 hover:scale-105"
              />
              <div className="w-full">
                <h1 className="font-bold">{postData.creatorName}</h1>
                <h3 className="text-xs text-[#717171]">
                  {postData.created.toLocaleString()}
                </h3>
              </div>
            </div>
            <div className="mt-8 w-full">
              <h2 className="mb-2 font-bold">{postData.title}</h2>
              <HtmlContent html={postData.content} />
            </div>
            <div className="mt-10 w-full flex gap-2 flex-wrap">
              {postData.topics.map((topic: string, index: number) => (
                <div
                  className="rounded-full text-blue-500 text-xs px-4 py-1 bg-blue-100 text-center"
                  key={index}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <button
              className="continue-application w-full"
              onClick={() => {
                setShowCreatePost(!showCreatePost);
              }}
            >
              <div>
                <div className="pencil"></div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
              </div>
              Escrever uma resposta
            </button>
          </div>

          {childPosts.length > 0 ? (
            <div className="mt-12">
              {childPosts.map((post: PostProps, index: number) => (
                <Post content={post} key={index} showAnswerButton={false} />
              ))}
            </div>
          ) : (
            <p className="mt-12 text-center w-full text-[#717171]">
              Ninguém interagiu com essa postagem até o momento
            </p>
          )}
        </section>
        <Sidebar />

        {showCreatePost && (
          <Popup
            title="Adicionar uma resposta"
            showState={setShowCreatePost}
            description="Adicone uma resposta para essa pergunta e ajuda a nossa comunidade a crescer e se tornar cada vez mais ativa!"
          >
            <form
              onSubmit={async (e: React.SyntheticEvent) => {
                e.preventDefault();
                await createPost();
              }}
            >
              <TextEditor value={content} setValue={setContent} />
              <button className="w-full bg-blue-400 text-white px-4 py-2 mt-8 text-center cursor-pointer rounded-xl transition-all duration-300 hover:bg-blue-500">
                Publicar
              </button>
            </form>
          </Popup>
        )}
      </div>
    )
  );
};

export default page;
