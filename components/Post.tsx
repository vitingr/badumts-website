"use client";

import { PostProps } from "@/types";
import Image from "next/image";
import React from "react";
import HtmlContent from "./config/HtmlContent";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { infoUser } from "@/contexts/UserContext";
import ToastMessage from "./config/ToastMessage";
import { toast } from "react-toastify";

const Post = ({
  content,
  showAnswerButton,
  refetch
}: {
  content: PostProps;
  showAnswerButton: boolean;
  refetch: any
}) => {
  const { user } = infoUser();

  const handleLikePost = async () => {
    try {
      const response = await fetch(
        "https://badumts.onrender.com/post/likePost",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            postId: content.id,
          }),
        }
      );

      if (response.ok) {
        refetch()
      }
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível curtir a postagem");
    }
  };

  const handleDislikePost = async () => {
    try {
      const response = await fetch(
        "https://badumts.onrender.com/post/dislikePost",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            postId: content.id,
            likes: content.likes,
          }),
        }
      );

      if (response.ok) {
        refetch()
      }
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível remover a curtida da postagem");
    }
  };

  return (
    <div className="flex justify-between border-b border-neutral-200 mt-8 p-4 rounded-lg gap-4 cursor-pointer transition-all duration-300 hover:bg-neutral-50">
      <ToastMessage />
      <div>
        <Image
          alt="Post Creator Photo"
          src={content.creatorPhoto}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="w-full">
        <h1 className="font-bold">
          {content.creatorName} -{" "}
          <span className="font-normal">{content.title}</span>
        </h1>
        <h3 className="text-[#626B7F] text-xs mb-4">
          {content.created.toLocaleString()}
        </h3>
        <HtmlContent html={content.content} />
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 mt-6 items-center w-full">
            {content.likes.includes(user.id) ? (
              <AiFillHeart
                className="colored-icon cursor-pointer"
                size={16}
                onClick={async () => await handleDislikePost()}
              />
            ) : (
              <AiOutlineHeart
                className="gray-icon cursor-pointer"
                size={16}
                onClick={async () => await handleLikePost()}
              />
            )}
            <p className="text-xs text-[#626B7F]">
              {content.qtdLikes} {content.qtdLikes && content.qtdLikes > 1 || content.qtdLikes == 0 ? "curtidas" : "curtida"}
            </p>
          </div>
          {showAnswerButton && (
            <div className="w-full flex justify-end">
              <Link
                href={`/blog/post/${content.id}`}
                className="text-blue-900 text-sm px-4 py-1 text-center rounded-xl cursor-pointer"
              >
                Responder
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
