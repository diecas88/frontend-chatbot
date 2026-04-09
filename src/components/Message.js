const Message = ({ role, text }) => {
  const isUser = role === "user";

  return (
    <div className={`flex items-end gap-2 mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
  
  {!isUser && (
    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs">
      🤖
    </div>
  )}

  <div
    className={`px-4 py-3 rounded-2xl max-w-md text-sm shadow-md ${
      isUser
        ? "bg-blue-600 text-white rounded-br-none"
        : "bg-white text-gray-800 rounded-bl-none"
    }`}
  >
    {text === "Pensando..." ? <Typing /> : text}
  </div>

  {isUser && (
    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
      👤
    </div>
  )}

</div>
  );
};

const Typing = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
  </div>
);


export default Message;