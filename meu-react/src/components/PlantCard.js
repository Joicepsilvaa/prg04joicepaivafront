export default function PlantCard({ nome, sol, agua }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">🌞 Sol: {sol}</p>
          <p className="card-text">💧 Água: {agua}</p>
        </div>
      </div>
    </div>
  );
}
