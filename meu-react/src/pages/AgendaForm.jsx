import { useEffect, useState } from "react";
import { criarAgenda, atualizarAgenda, buscarAgenda } from "../services/agendaService";
import { listarPlantas } from "../services/plantaService";
import { listarPeriodicidades } from "../services/periodicidadeService";
import { useNavigate, useParams } from "react-router-dom";

export default function AgendaForm() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [agenda, setAgenda] = useState({
    descricao: "",
    plantaId: "",
    periodicidadeId: ""
  });

  const [plantas, setPlantas] = useState([]);
  const [periodicidades, setPeriodicidades] = useState([]);

  useEffect(() => {
    listarPlantas().then(res => setPlantas(res.data));
    listarPeriodicidades().then(res => setPeriodicidades(res.data));

    if (id) {
      buscarAgenda(id).then(res => setAgenda(res.data));
    }
  }, [id]);

  function handleChange(e) {
    setAgenda({ ...agenda, [e.target.name]: e.target.value });
  }

  function salvar(e) {
    e.preventDefault();

    const acao = id
      ? atualizarAgenda(id, agenda)
      : criarAgenda(agenda);

    acao.then(() => navigate("/agendas"));
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Agenda" : "Nova Agenda"}</h2>

      <form onSubmit={salvar}>
        <div className="mb-3">
          <label>Descrição</label>
          <input
            name="descricao"
            value={agenda.descricao}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Planta</label>
          <select
            name="plantaId"
            value={agenda.plantaId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Selecione</option>
            {plantas.map(p => (
              <option key={p.id} value={p.id}>{p.nomePlanta}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Periodicidade</label>
          <select
            name="periodicidadeId"
            value={agenda.periodicidadeId}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Selecione</option>
            {periodicidades.map(p => (
              <option key={p.id} value={p.id}>{p.descricao}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-success">
          Salvar
        </button>
      </form>
    </div>
  );
}
