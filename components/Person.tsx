import { PersonProps } from '@/types'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react'

const Person = ({personData}: {personData: PersonProps}) => {
  return (
    <div className='w-[300px] h-[300px] p-6 border border-neutral-200 rounded-xl bg-[#ffffff56]'>
      <h1 className='text-xl font-bold text-center'>{personData.name}</h1>
      <h2 className='text-blue-500 text-sm -mt-1 text-center'>{personData.email}</h2>
      <div className='mt-4'>
        <p className=''>{personData.description}</p>
      </div>
      <div className='flex gap-4 mt-10'>
        <FaLinkedin size={22.5} className='transition-all duration-300 hover:scale-105 cursor-pointer' />
        <FaGithub size={22.5} className='transition-all duration-300 hover:scale-105 cursor-pointer' />
      </div>
    </div>
  )
}

export default Person