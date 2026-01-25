import api from "./api";

export function loginUsuario(dados) {
  return api.post("/usuarios/login", dados);
}

export function cadastrarUsuario(dados) {
  return api.post("/usuarios/cadastro", dados);
}