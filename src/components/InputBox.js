import { useState } from "react";

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex mt-4">
      <input
        autoFocus
        className="flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Escribe tu pregunta..."
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
};

export default InputBox;