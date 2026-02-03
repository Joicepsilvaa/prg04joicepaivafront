import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  criarEspecie,
  buscarEspecie,
  atualizarEspecie
} from "../services/especieService";

export default function EspecieForm() {
  const [especie, setEspecie] = useState({
    nomePopular: "",
    nomeCientifico: "",
    luz: "",
    frequenciaRega: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscarEspecie(id).then(res => setEspecie(res.data));
    }
  }, [id]);

  function handleChange(e) {
    setEspecie({ ...especie, [e.target.name]: e.target.value });
  }

  function salvar(e) {
    e.preventDefault();

    const acao = id
      ? atualizarEspecie(id, especie)
      : criarEspecie(especie);

    acao.then(() => navigate("/especies"));
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {id ? "Editar Espécie" : "Nova Espécie"}
      </h2>

      <form onSubmit={salvar}>
        {/* Nome Popular */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Nome Popular
          </label>
          <input
            className="form-control"
            name="nomePopular"
            value={especie.nomePopular}
            onChange={handleChange}
            placeholder="Ex: Suculenta"
            required
          />
        </div>

        {/* Nome Científico */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Nome Científico
          </label>
          <input
            className="form-control"
            name="nomeCientifico"
            value={especie.nomeCientifico}
            onChange={handleChange}
            placeholder="Ex: Echeveria elegans"
            required
          />
        </div>

        {/* Tipo de Luz */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            Tipo de Luz
          </label>
          <input
            className="form-control"
            name="luz"
            value={especie.luz}
            onChange={handleChange}
            placeholder="Ex: Sol pleno, meia-sombra"
            required
          />
        </div>

        {/* Frequência de Rega */}
        <div className="mb-4">
          <label className="form-label fw-semibold">
            Frequência de Rega
          </label>
          <input
            className="form-control"
            name="frequenciaRega"
            value={especie.frequenciaRega}
            onChange={handleChange}
            placeholder="Ex: 2 vezes por semana"
            required
          />
        </div>

        <button className="btn btn-success">
          Salvar
        </button>
      </form>
    </div>
  );
}
