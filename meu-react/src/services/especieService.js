import axios from "axios";

// URL base da API de espécies
const API_URL = "http://localhost:8080/especies";

// Busca todas as espécies
export const listarEspecies = () => axios.get(API_URL);

// Busca uma espécie específica pelo ID
export const buscarEspecie = (id) => axios.get(`${API_URL}/${id}`);

// Cria uma nova espécie
export const criarEspecie = (data) => axios.post(API_URL, data);

// Atualiza uma espécie existente
export const atualizarEspecie = (id, data) => axios.put(`${API_URL}/${id}`, data);

// Remove uma espécie
export const excluirEspecie = (id) => axios.delete(`${API_URL}/${id}`);