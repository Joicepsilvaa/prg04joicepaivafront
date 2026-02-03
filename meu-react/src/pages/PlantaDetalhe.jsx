import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscarPlanta } from "../services/plantaService";
import { listarCuidadosPorPlanta } from "../services/cuidadoService";

export default function PlantaDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [planta, setPlanta] = useState(null);
  const [cuidados, setCuidados] = useState([]);

  useEffect(() => {
    buscarPlanta(id)
      .then(res => setPlanta(res.data))
      .catch(() => alert("Erro ao carregar planta"));

    listarCuidadosPorPlanta(id)
      .then(res => setCuidados(res.data))
      .catch(() => alert("Erro ao carregar histórico de cuidados"));
  }, [id]);

  if (!planta) return <p className="m-4">Carregando...</p>;

  return (
    <div className="container mt-4">
      <h2>🌱 {planta.nomePlanta}</h2>

      <p><strong>Espécie:</strong> {planta.especie?.nomePopular}</p>
      <p><strong>Local:</strong> {planta.local}</p>
      <p><strong>Observações:</strong> {planta.observacoes || "-"}</p>

      <hr />

      <h4>📋 Histórico de Cuidados</h4>

      {cuidados.length === 0 ? (
        <p className="text-muted">Nenhum cuidado registrado.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Data</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {cuidados.map(c => (
              <tr key={c.id}>
                <td>{c.tipo}</td>
                <td>{new Date(c.data).toLocaleDateString()}</td>
                <td>{c.observacoes || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/plantas")}
      >
        Voltar
      </button>
    </div>
  );
}
