import api from "./api";

export function listarInsumos() {
  return api.get("/insumos");
}

export function buscarInsumo(id) {
  return api.get(`/insumos/${id}`);
}

export function criarInsumo(dados) {
  return api.post("/insumos", dados);
}

export function atualizarInsumo(id, dados) {
  return api.put(`/insumos/${id}`, dados);
}

export function excluirInsumo(id) {
  return api.delete(`/insumos/${id}`);
}
