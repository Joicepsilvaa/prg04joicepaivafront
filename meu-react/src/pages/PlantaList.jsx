import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarPlantas, excluirPlanta } from "../services/plantaService";

export default function PlantaList() {
  // Estado pra armazenar a lista de plantas
  const [plantas, setPlantas] = useState([]);

  // Quando a página carrega, busca as plantas
  useEffect(() => {
    carregar();
  }, []);

  // Busca as plantas da API e atualiza o estado
  function carregar() {
    listarPlantas().then(res => {
      console.log("📊 Plantas carregadas:", res.data); // Pra ver o que veio da API
      setPlantas(res.data);
    });
  }

  // Remove uma planta com confirmação
  function remover(id) {
    if (window.confirm("Deseja realmente excluir?")) {
      excluirPlanta(id).then(carregar); // Depois de excluir, recarrega a lista
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Plantas</h2>
        {/* Botão pra criar nova planta */}
        <Link to="/plantas/nova" className="btn btn-success">
          Nova Planta
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome da Planta</th>
            <th>Espécie</th>
            <th>Local</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Para cada planta, cria uma linha na tabela */}
          {plantas.map(planta => (
            <tr key={planta.id}>
              <td>{planta.nomePlanta}</td>
              {/* Mostra o nome popular da espécie (se a API trouxer) */}
              <td>{planta.especie?.nomePopular}</td>
              <td>{planta.local}</td>
              <td>
                {/* Botão editar - leva pra tela de edição */}
                <Link
                  className="btn btn-sm btn-primary me-2"
                  to={`/plantas/editar/${planta.id}`}
                  onClick={() => console.log("✏️ Indo editar planta ID:", planta.id)}
                >
                  Editar
                </Link>
                {/* Botão excluir - chama a função de remover */}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remover(planta.id)}
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