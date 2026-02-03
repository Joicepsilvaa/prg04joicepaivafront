import { useEffect, useState } from "react";
import {
  listarAgendas,
  excluirAgenda,
  concluirAgenda
} from "../services/agendaService";
import { Link } from "react-router-dom";

export default function AgendaList() {

  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  function carregar() {
    listarAgendas().then(res => setAgendas(res.data));
  }

  function remover(id) {
    if (window.confirm("Deseja excluir esta agenda?")) {
      excluirAgenda(id).then(carregar);
    }
  }

  function concluir(id) {
    concluirAgenda(id).then(carregar);
  }

  return (
    <div className="container mt-4">
      <h2>Agendas</h2>

      <Link to="/agendas/nova" className="btn btn-success mb-3">
        Nova Agenda
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Status</th>
            <th>Planta</th>
            <th>Periodicidade</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {agendas.map(a => (
            <tr key={a.id}>
              <td>{a.descricao}</td>

              <td>
                <span
                  className={`badge ${
                    a.status === "CONCLUIDO"
                      ? "bg-success"
                      : "bg-warning"
                  }`}
                >
                  {a.status}
                </span>
              </td>

              <td>
                <Link to={`/agendas/planta/${a.plantaId}`}>
                  {a.plantaNome}
                </Link>
              </td>

              <td>{a.periodicidadeDescricao}</td>

              <td>
                {a.status === "PENDENTE" && (
                  <button
                    onClick={() => concluir(a.id)}
                    className="btn btn-success btn-sm me-2"
                  >
                    Concluir
                  </button>
                )}

                <Link
                  to={`/agendas/editar/${a.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Editar
                </Link>

                <button
                  onClick={() => remover(a.id)}
                  className="btn btn-danger btn-sm"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}