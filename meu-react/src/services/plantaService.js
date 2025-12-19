import axios from "axios";

// URL base da API de plantas
const API_URL = "http://localhost:8080/plantas";

// Busca todas as plantas (com log pra debug)
export const listarPlantas = () => {
  console.log("📡 GET " + API_URL);
  return axios.get(API_URL);
};

// Busca uma planta específica pelo ID (com log pra debug)
export const buscarPlanta = (id) => {
  console.log("📡 GET " + API_URL + "/" + id);
  return axios.get(`${API_URL}/${id}`);
};

// Cria uma nova planta (com log pra debug)
export const criarPlanta = (data) => {
  console.log("📡 POST " + API_URL, data);
  return axios.post(API_URL, data);
};

// Atualiza uma planta existente (com log pra debug)
export const atualizarPlanta = (id, data) => {
  console.log("📡 PUT " + API_URL + "/" + id, data);
  return axios.put(`${API_URL}/${id}`, data);
};

// Remove uma planta (com log pra debug)
export const excluirPlanta = (id) => {
  console.log("📡 DELETE " + API_URL + "/" + id);
  return axios.delete(`${API_URL}/${id}`);
};