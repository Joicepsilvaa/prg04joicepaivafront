import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// seleciona o elemento HTML com o ID "root" e cria a raiz de renderização do React
const root = ReactDOM.createRoot(document.getElementById("root"));

// renderiza o componente <App /> dentro do elemento "root" do HTML
root.render(
  // <React.StrictMode> é um componente que ajuda a encontrar problemas e avisos no código
  <React.StrictMode>
    {/* Onde a aplicação principal é injetada */}
    <App />
  </React.StrictMode>
);