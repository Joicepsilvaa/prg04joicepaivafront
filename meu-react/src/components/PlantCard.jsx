export default function PlantCard({ nome, especie, local, observacao }) {
  return (
    <div className="col-md-4">
      <div className="plant-card shadow-sm h-100">

        {/* Nome */}
        <h5 className="plant-title mb-3">🪴 {nome}</h5>

        <div className="plant-info">
          <p className="mb-2">
            <span className="plant-label">🌿 Espécie</span><br />
            <span className="plant-value">
              {especie || "Não informada"}
            </span>
          </p>

          <p className="mb-2">
            <span className="plant-label">📍 Local</span><br />
            <span className="plant-value">
              {local || "—"}
            </span>
          </p>

          <p className="plant-observacao">
            <span className="plant-label">📝 Observação</span><br />
            <span className="plant-muted">
              {observacao || "Nenhuma observação"}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
