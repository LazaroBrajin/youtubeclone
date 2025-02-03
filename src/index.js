import React from "react";
import ReactDOM from "react-dom/client"; // Usa createRoot en lugar de render
import App from "./App";
import AuthProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);