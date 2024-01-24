import { PostProps } from "@/types";
import Image from "next/image";
import React from "react";
import HtmlContent from "./config/HtmlContent";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const Post = ({
  content,
  showAnswerButton,
}: {
  content: PostProps;
  showAnswerButton: boolean;
}) => {
  return (
    <div className="flex justify-between border-b border-neutral-200 mt-8 p-4 rounded-lg gap-4 cursor-pointer transition-all duration-300 hover:bg-neutral-50">
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
        <h3 className="text-[#717171] text-xs mb-4">
          {content.created.toLocaleString()}
        </h3>
        <HtmlContent html={content.content} />
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 mt-6 items-center w-full">
            <AiOutlineHeart className="gray-icon cursor-pointer" size={16} />
            <p className="text-xs text-[#717171]">
              {content.qtdLikes} curtidas
            </p>
          </div>
          {showAnswerButton && (
            <div className="w-full flex justify-end">
              <Link
                href={`/blog/post/${content.id}`}
                className="bg-blue-400 text-white px-4 py-1 text-center rounded-xl transition-all duration-300 cursor-pointer hover:bg-blue-500"
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
