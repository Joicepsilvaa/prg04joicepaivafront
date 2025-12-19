import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  criarEspecie,
  buscarEspecie,
  atualizarEspecie
} from "../services/especieService";

export default function EspecieForm() {
  // Estado inicial da espécie com campos vazios
  const [especie, setEspecie] = useState({
    nomePopular: "",
    nomeCientifico: "",
    luz: "",
    frequenciaRega: ""
  });

  // Pega o ID da URL se for edição, e o hook para navegação
  const { id } = useParams();
  const navigate = useNavigate();

  // Se tiver um ID na URL, busca a espécie pra preencher o formulário
  useEffect(() => {
    if (id) {
      buscarEspecie(id).then(res => setEspecie(res.data));
    }
  }, [id]);

  // Atualiza o estado quando o usuário digita nos campos
  function handleChange(e) {
    setEspecie({ ...especie, [e.target.name]: e.target.value });
  }

  // Salva a espécie (cria nova ou atualiza existente)
  function salvar(e) {
    e.preventDefault(); // Evita o recarregamento da página

    // Decide se é criação ou edição baseado no ID
    const acao = id
      ? atualizarEspecie(id, especie)
      : criarEspecie(especie);

    // Depois de salvar, volta pra lista de espécies
    acao.then(() => navigate("/especies"));
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Espécie" : "Nova Espécie"}</h2>

      <form onSubmit={salvar}>
        <input className="form-control mb-2"
          name="nomePopular"
          placeholder="Nome Popular"
          value={especie.nomePopular}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          name="nomeCientifico"
          placeholder="Nome Científico"
          value={especie.nomeCientifico}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          name="luz"
          placeholder="Tipo de Luz"
          value={especie.luz}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-3"
          name="frequenciaRega"
          placeholder="Frequência de Rega"
          value={especie.frequenciaRega}
          onChange={handleChange}
          required
        />

        <button className="btn btn-success">Salvar</button>
      </form>
    </div>
  );
}