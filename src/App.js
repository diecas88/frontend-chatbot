import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { sendQueryToLambda } from "./services/api";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Pensando..." }
    ]);

    try {
      const response = await sendQueryToLambda(text);

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: response }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: "Error ❌" }
      ]);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="w-full max-w-2xl h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <h2 className="text-xl font-bold mb-4 text-center">
          🤖 RAG Assistant
        </h2>

        {/* Chat */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <ChatWindow messages={messages} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <InputBox onSend={handleSend} />
        </div>

      </div>
    </div>
  );
}

export default App;