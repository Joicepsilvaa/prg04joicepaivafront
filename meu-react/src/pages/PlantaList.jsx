import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarPlantas, excluirPlanta } from "../services/plantaService";
import { listarEspecies } from "../services/especieService";

export default function PlantaList() {
  const [plantas, setPlantas] = useState([]);
  const [mapaEspecies, setMapaEspecies] = useState({});

  function carregarDados() {
    Promise.all([listarPlantas(), listarEspecies()])
      .then(([resPlantas, resEspecies]) => {
        setPlantas(resPlantas.data);

        // Cria um mapa: { id: nomePopular }
        const mapa = {};
        resEspecies.data.forEach(e => {
          mapa[e.id] = e.nomePopular;
        });

        setMapaEspecies(mapa);
      })
      .catch(err => {
        console.error("Erro ao carregar dados:", err);
        alert("Erro ao carregar dados");
      });
  }

  useEffect(() => {
    carregarDados();
  }, []);

  function remover(id) {
    if (window.confirm("Deseja realmente excluir esta planta?")) {
      excluirPlanta(id).then(carregarDados);
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Plantas</h2>

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
          {plantas.map(planta => (
            <tr key={planta.id}>
              <td>{planta.nomePlanta}</td>

              {/* ✅ AGORA FUNCIONA */}
              <td>
                {mapaEspecies[planta.especieId] || "—"}
              </td>

              <td>{planta.local}</td>

              <td>
                <Link
                  to={`/plantas/editar/${planta.id}`}
                  className="btn btn-sm btn-primary me-2"
                >
                  Editar
                </Link>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remover(planta.id)}
                >
                  Excluir
                </button>

                <Link to={`/plantas/${planta.id}`}
                  className="btn btn-sm btn-outline-success"
                >
  Detalhes
</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}