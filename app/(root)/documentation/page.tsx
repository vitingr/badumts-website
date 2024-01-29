"use client"

import DocsSidebar from "@/components/DocsSidebar";
import DocsHome from "@/components/docs/DocsHome";
import React, { useState } from "react";
import { FaAlignLeft  } from "react-icons/fa6";

const page = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className="w-full flex mt-[125px] sm:mt-0 justify-between sm:max-h-[72vh] p-2">
      <DocsSidebar showMenu={showMenu} />
      <div className="w-full h-full overflow-y-scroll">
        <FaAlignLeft className="cursor-pointer gray-icon sm:hidden ml-2 -mt-4 fixed bg-slate-200 rounded-lg" size={35} onClick={() => setShowMenu(!showMenu)} />
        <DocsHome />
      </div>
    </div>
  );
};

export default page;
