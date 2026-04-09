import { useEffect, useRef } from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto">
      {messages.map((msg, index) => (
        <Message key={index} role={msg.role} text={msg.text} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;