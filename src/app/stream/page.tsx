import { type FC } from "react";
import { ChatStream } from "@/app/components/chat-stream";

interface HomeProps {}

const Page: FC<HomeProps> = ({}) => {
  return (
    <>
      <ChatStream />
    </>
  );
};

export default Page;
