import { useState } from "react";
import ChatWindow from "./ChatWindow";
import { sendQueryToLambda } from "../services/api";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    // 👉 Mensaje del usuario
    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);

    // 👉 Mensaje temporal (loading)
    const loadingMessage = { role: "bot", text: "Escribiendo..." };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await sendQueryToLambda(text);

      // 👉 Reemplazar el "Escribiendo..." por la respuesta real
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "bot",
          text: response,
        };
        return updated;
      });

    } catch (error) {
      console.error(error);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "bot",
          text: "Error al consultar el servicio",
        };
        return updated;
      });
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-600 text-white text-xl shadow-lg hover:bg-blue-700 transition z-50"
      >
        💬
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-24 right-5 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
            <span className="font-semibold">🤖 RAG Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <ChatWindow messages={messages} onSend={handleSend} />
          </div>

        </div>
      )}
    </>
  );
}