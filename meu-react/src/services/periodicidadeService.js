import api from "./api";

export function listarPeriodicidades() {
  return api.get("/periodicidades");
}

export function buscarPeriodicidade(id) {
  return api.get(`/periodicidades/${id}`);
}

export function criarPeriodicidade(dados) {
  return api.post("/periodicidades", dados);
}

export function atualizarPeriodicidade(id, dados) {
  return api.put(`/periodicidades/${id}`, dados);
}

export function excluirPeriodicidade(id) {
  return api.delete(`/periodicidades/${id}`);
}
