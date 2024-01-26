import { infoUser } from "@/contexts/UserContext";
import Image from "next/image";
import React from "react";

type AiChatProps = {
  text: string;
  creator: string;
};

const AiChat = ({ chat }: { chat: AiChatProps }) => {
  const { user } = infoUser();

  return chat.creator == "ai" ? (
    <div className="mt-6 w-full flex gap-2 py-6 border-b border-neutral-100">
      <Image
        alt="User image"
        src={"/assets/bot.png"}
        width={35}
        height={35}
        className="rounded-full w-[35px] h-[35px]"
      />
      {chat && chat.text && (
        <p className="text-justify text-[#626B7F]">
          <span className="font-bold mr-2">Getúlio:</span>
          {chat.text}
        </p>
      )}
    </div>
  ) : (
    <div className="mt-6 w-full flex gap-2 py-6 border-b border-neutral-100">
      <Image
        alt="Getulio image"
        src={user.photo}
        width={35}
        height={35}
        className="rounded-full w-[35px] h-[35px]"
      />
      {chat && chat.text && (
        <p className="text-justify text-[#626B7F]">
          <span className="font-bold mr-2">Você:</span>
          {chat.text}
        </p>
      )}
    </div>
  );
};

export default AiChat;
