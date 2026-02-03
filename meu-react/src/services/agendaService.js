import api from "./api";

export function listarAgendas() {
  return api.get("/agendas");
}

export function listarAgendasPorPlanta(plantaId) {
  return api.get(`/agendas/planta/${plantaId}`);
}

export function listarAgendasPorStatus(status) {
  return api.get(`/agendas/status/${status}`);
}

export function buscarAgenda(id) {
  return api.get(`/agendas/${id}`);
}

export function criarAgenda(dados) {
  return api.post("/agendas", dados);
}

export function atualizarAgenda(id, dados) {
  return api.put(`/agendas/${id}`, dados);
}

export function concluirAgenda(id) {
  return api.patch(`/agendas/${id}/concluir`);
}

export function excluirAgenda(id) {
  return api.delete(`/agendas/${id}`);
}
