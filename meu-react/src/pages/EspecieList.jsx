import { useEffect, useState } from "react";
import { listarEspecies, excluirEspecie } from "../services/especieService";
import { Link } from "react-router-dom";

export default function EspecieList() {
  // Estado para armazenar a lista de espécies
  const [especies, setEspecies] = useState([]);

  // Quando o componente carrega, busca as espécies
  useEffect(() => {
    carregar();
  }, []);

  // Função que busca as espécies da API e atualiza o estado
  function carregar() {
    listarEspecies().then(res => {
      setEspecies(res.data);
    });
  }

  // Remove uma espécie com confirmação do usuário
  function remover(id) {
    if (window.confirm("Deseja realmente excluir?")) {
      excluirEspecie(id).then(carregar); // Depois de excluir, recarrega a lista
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Espécies</h2>
        {/* Botão para criar nova espécie */}
        <Link to="/especies/nova" className="btn btn-success">
          Nova Espécie
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome Popular</th>
            <th>Nome Científico</th>
            <th>Luz</th>
            <th>Rega</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Para cada espécie, cria uma linha na tabela */}
          {especies.map(e => (
            <tr key={e.id}>
              <td>{e.nomePopular}</td>
              <td>{e.nomeCientifico}</td>
              <td>{e.luz}</td>
              <td>{e.frequenciaRega}</td>
              <td>
                {/* Botão para editar - leva pra tela de edição */}
                <Link
                  className="btn btn-sm btn-primary me-2"
                  to={`/especies/editar/${e.id}`}
                >
                  Editar
                </Link>
                {/* Botão para excluir - chama a função de remover */}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remover(e.id)}
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