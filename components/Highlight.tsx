import { HighlighProps } from "@/types";
import Image from "next/image";
import React from "react";

const Highlight = ({ content }: { content: HighlighProps }) => {
  return (
    <div className="w-[350px] h-[475px] p-4 rounded-xl overflow-hidden bg-white shadow-md shadow-slate-200">
      <div className="w-full flex items-center justify-center h-[275px]">
        <Image src={content.image} alt="Picture" width={200} height={200} />
      </div>
      <h1 className="text-center text-xl font-semibold">{content.title}</h1>
      <p className="text-sm text-[#717171] text-justify mt-4">{content.text}</p>
    </div>
  );
};

export default Highlight;
