import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

(function () {
  // Evita duplicarlo
  if (document.getElementById("chat-widget-root")) return;

  const container = document.createElement("div");
  container.id = "chat-widget-root";
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<ChatWidget />);
})();