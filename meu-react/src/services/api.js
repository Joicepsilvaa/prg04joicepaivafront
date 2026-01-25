import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Interceptor: envia o usuário logado automaticamente
api.interceptors.request.use(config => {
  const usuario = localStorage.getItem("usuario");

  if (usuario) {
    // se depois você usar token, entra aqui
    // const token = JSON.parse(usuario).token;
    // config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
