import DocsSidebar from "@/components/DocsSidebar";
import DocsHome from "@/components/docs/DocsHome";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex mt-[125px] sm:mt-0 justify-between max-h-[72vh]">
      <DocsSidebar />
      <div className="w-full h-full overflow-y-hidden">
        <DocsHome />
      </div>
    </div>
  );
};

export default page;
