import api from "./api";

export function listarCuidados() {
  return api.get("/cuidados");
}

export function listarCuidadosPorPlanta(plantaId) {
  return api.get(`/cuidados/planta/${plantaId}`);
}

export function buscarCuidado(id) {
  return api.get(`/cuidados/${id}`);
}

export function criarCuidado(dados) {
  return api.post("/cuidados", dados);
}

export function atualizarCuidado(id, dados) {
  return api.put(`/cuidados/${id}`, dados);
}

export function excluirCuidado(id) {
  return api.delete(`/cuidados/${id}`);
}
