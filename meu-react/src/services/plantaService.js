import axios from "axios";
import { getUsuarioLogado } from "./auth";

const API_URL = "http://localhost:8080/plantas";

// lista plantas do usuário
export const listarPlantas = () => {
  const usuario = getUsuarioLogado();

  return axios.get(API_URL, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// busca uma planta
export const buscarPlanta = (id) => {
  const usuario = getUsuarioLogado();

  return axios.get(`${API_URL}/${id}`, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// cria planta
export const criarPlanta = (data) => {
  const usuario = getUsuarioLogado();

  return axios.post(API_URL, data, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// atualiza planta
export const atualizarPlanta = (id, data) => {
  const usuario = getUsuarioLogado();

  return axios.put(`${API_URL}/${id}`, data, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// exclui planta
export const excluirPlanta = (id) => {
  const usuario = getUsuarioLogado();

  return axios.delete(`${API_URL}/${id}`, {
    params: {
      emailUsuario: usuario.email
    }
  });
};