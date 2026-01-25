import { useEffect, useState } from "react";
import { listarInsumos, excluirInsumo } from "../services/insumoService";
import { Link } from "react-router-dom";

export default function InsumoList() {
  const [insumos, setInsumos] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  function carregar() {
    listarInsumos().then(res => setInsumos(res.data));
  }

  function remover(id) {
    if (window.confirm("Deseja excluir o insumo?")) {
      excluirInsumo(id).then(carregar);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Insumos</h2>
        <Link to="/insumos/novo" className="btn btn-success">
          Novo Insumo
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Unidade</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {insumos.map(i => (
            <tr key={i.id}>
              <td>{i.nome}</td>
              <td>{i.quantidade}</td>
              <td>{i.unidadeMedida}</td>
              <td>{i.categoria}</td>
              <td>
                <Link
                  className="btn btn-sm btn-primary me-2"
                  to={`/insumos/editar/${i.id}`}
                >
                  Editar
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remover(i.id)}
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
