import { useEffect, useState } from "react";
import { excluirCuidado, listarCuidados } from "../services/cuidadoService";
import { Link } from "react-router-dom";

export default function CuidadoList() {
  const [cuidados, setCuidados] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  function carregar() {
    listarCuidados().then(res => setCuidados(res.data));
  }

  function remover(id) {
    if (window.confirm("Deseja excluir este cuidado?")) {
      excluirCuidado(id).then(carregar);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Cuidados</h2>
        <Link to="/cuidados/novo" className="btn btn-success">
          Novo Cuidado
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Data</th>
            <th>Planta</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cuidados.map(c => (
            <tr key={c.id}>
              <td>{c.tipo}</td>
              <td>{c.data}</td>
              <td>{c.nomePlanta}</td>
              <td>
                <Link
                  className="btn btn-sm btn-primary me-2"
                  to={`/cuidados/editar/${c.id}`}
                >
                  Editar
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remover(c.id)}
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
