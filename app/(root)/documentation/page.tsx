import DocsSidebar from "@/components/DocsSidebar";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex gap-20 mt-[125px] sm:mt-0 justify-between">
      <DocsSidebar />
      <div className="w-full">
        teste
      </div>
    </div>
  );
};

export default page;
