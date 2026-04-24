import { useEffect, useRef } from "react";
import Message from "./Message";
import InputBox from "./InputBox";

const ChatWindow = ({ messages = [], onSend }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      
      {/* Mensajes */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 scroll-smooth">
        {messages.map((msg, index) => (
          <Message key={index} role={msg.role} text={msg.text} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input fijo abajo */}
      <div className="border-t p-2">
        <InputBox onSend={onSend} />
      </div>

    </div>
  );
};

export default ChatWindow;