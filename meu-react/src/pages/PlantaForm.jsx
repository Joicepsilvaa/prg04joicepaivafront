import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  criarPlanta,
  buscarPlanta,
  atualizarPlanta
} from "../services/plantaService";
import { listarEspecies } from "../services/especieService";

export default function PlantaForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [planta, setPlanta] = useState({
    nomePlanta: "",
    especieId: "",
    local: "",
    observacoes: ""
  });

  const [especies, setEspecies] = useState([]);

  // 🔹 Carrega espécies
  useEffect(() => {
    listarEspecies()
      .then(res => setEspecies(res.data))
      .catch(err => {
        console.error("Erro ao carregar espécies:", err);
        alert("Erro ao carregar espécies");
      });
  }, []);

  // 🔹 Se for edição, carrega a planta
  useEffect(() => {
    if (id) {
      buscarPlanta(id)
        .then(res => {
          setPlanta({
            nomePlanta: res.data.nomePlanta || "",
            especieId: res.data.especie?.id || "",
            local: res.data.local || "",
            observacoes: res.data.observacoes || ""
          });
        })
        .catch(err => {
          console.error("Erro ao carregar planta:", err);
          alert("Erro ao carregar planta");
        });
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "especieId") {
      setPlanta({ ...planta, [name]: value === "" ? "" : Number(value) });
    } else {
      setPlanta({ ...planta, [name]: value });
    }
  }

  function salvar(e) {
    e.preventDefault();

    const dados = {
      nomePlanta: planta.nomePlanta,
      especieId: Number(planta.especieId),
      local: planta.local,
      observacoes: planta.observacoes || ""
    };

    const acao = id
      ? atualizarPlanta(id, dados)
      : criarPlanta(dados);

    acao
      .then(() => navigate("/plantas"))
      .catch(err => {
        console.error("Erro ao salvar:", err.response?.data);
        alert("Erro ao salvar planta");
      });
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Planta" : "Nova Planta"}</h2>

      <form onSubmit={salvar}>
        <div className="mb-3">
          <label className="form-label">Nome da Planta *</label>
          <input
            className="form-control"
            name="nomePlanta"
            value={planta.nomePlanta}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Espécie *</label>
          <select
            className="form-select"
            name="especieId"
            value={planta.especieId}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma espécie</option>
            {especies.map(especie => (
              <option key={especie.id} value={especie.id}>
                {especie.nomePopular} — {especie.nomeCientifico}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Local *</label>
          <input
            className="form-control"
            name="local"
            value={planta.local}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Observações</label>
          <textarea
            className="form-control"
            name="observacoes"
            value={planta.observacoes}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Atualizar" : "Salvar"}
        </button>

        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/plantas")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}