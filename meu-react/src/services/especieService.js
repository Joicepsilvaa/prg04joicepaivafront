import axios from "axios";
import { getUsuarioLogado } from "./auth";

const API_URL = "http://localhost:8080/especies";

// lista todas as espécies DO USUÁRIO
export const listarEspecies = () => {
  const usuario = getUsuarioLogado();

  return axios.get(API_URL, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// busca uma espécie específica
export const buscarEspecie = (id) => {
  const usuario = getUsuarioLogado();

  return axios.get(`${API_URL}/${id}`, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// cria uma nova espécie
export const criarEspecie = (data) => {
  const usuario = getUsuarioLogado();

  return axios.post(API_URL, data, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// atualiza uma espécie
export const atualizarEspecie = (id, data) => {
  const usuario = getUsuarioLogado();

  return axios.put(`${API_URL}/${id}`, data, {
    params: {
      emailUsuario: usuario.email
    }
  });
};

// remove uma espécie
export const excluirEspecie = (id) => {
  const usuario = getUsuarioLogado();

  return axios.delete(`${API_URL}/${id}`, {
    params: {
      emailUsuario: usuario.email
    }
  });
};
