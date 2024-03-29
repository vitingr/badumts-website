"use client"

import { PersonProps } from "@/types";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion'
import { slideInFromTop } from "@/utils/common/motion";

const Person = ({ personData, index }: { personData: PersonProps, index: number }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={slideInFromTop(index * 0.35)} className="w-[300px] min-h-[385px] p-6 border border-neutral-200 rounded-xl bg-[#ffffff56] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-neutral-300">
      <div className="w-full flex justify-center items-center">
        <Image
          alt="Group Member Photo"
          src={personData.photo}
          width={100}
          height={100}
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
      <h1 className="text-xl font-bold text-center mt-3 h-[60px]">{personData.name}</h1>
      <h2 className="text-blue-500 text-sm -mt-1 text-center">
        {personData.email}
      </h2>
      <div className="mt-4">
        <p className="sm:text-[#3e3e3e] text-[#626B7F]">{personData.description}</p>
      </div>
      <div className="py-4 w-full flex gap-2 flex-wrap h-[80px]">
        {personData.techs.map((tech: string, index: number) => (
          <div
            key={index}
            className="px-2 py-1 text-xs text-blue-500 bg-blue-100 rounded-full text-center cursor-default h-[25px]"
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <Link href={personData.linkedin} target="_blank">
          <FaLinkedin
            size={22.5}
            className="transition-all duration-300 hover:scale-105 cursor-pointer"
          />
        </Link>
        <Link href={personData.github} target="_blank">
          <FaGithub
            size={22.5}
            className="transition-all duration-300 hover:scale-105 cursor-pointer"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Person;
