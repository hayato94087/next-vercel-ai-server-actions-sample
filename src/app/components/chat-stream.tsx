"use client";

import { type FC } from "react";
import { useChat } from "ai/react";

type ChatProps = {};

export const ChatStream: FC<ChatProps> = ({}) => {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat({
    api: "/api/chat/stream",
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl dark:text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
