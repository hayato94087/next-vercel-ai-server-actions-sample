import { type FC } from "react";
import { Chat } from "@/app/components/chat";

type HomeProps = {};

const Page: FC<HomeProps> = ({}) => {
  return (
    <>
      <Chat />
    </>
  );
};

export default Page;
