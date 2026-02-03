import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import { listarPlantas } from "../services/plantaService";
import { listarEspecies } from "../services/especieService";

export default function Home() {
  const [plantas, setPlantas] = useState([]);
  const [especies, setEspecies] = useState([]);
  const [mapaEspecies, setMapaEspecies] = useState({});

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  useEffect(() => {
    if (usuario) {
      Promise.all([listarPlantas(), listarEspecies()])
        .then(([resPlantas, resEspecies]) => {
          setPlantas(resPlantas.data);
          setEspecies(resEspecies.data);

          // 🧠 Mapa de espécies: { id: nomePopular }
          const mapa = {};
          resEspecies.data.forEach(especie => {
            mapa[especie.id] = especie.nomePopular;
          });

          setMapaEspecies(mapa);
        })
        .catch(err => console.error("Erro ao carregar dados:", err));
    }
  }, [usuario]);

  // 📊 Resumos
  const totalPlantas = plantas.length;
  const totalEspecies = especies.length;

  const locais = [
    ...new Set(plantas.map(planta => planta.local))
  ];

  // 🪴 Mostrar só 3 plantas no Home
  const plantasResumo = plantas.slice(0, 3);

  return (
    <div className="container mt-4">

      {/* 🌱 TÍTULO */}
      <h1 className="text-center text-success mt-3">
        Meu Jardim 🌿
      </h1>

      <p className="text-center text-muted">
        Um resumo das suas plantinhas
      </p>

      {/* 🌱 RESUMO DO JARDIM */}
      {usuario && (
        <div className="row text-center mt-4">

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">🌱 Plantas</h6>
                <h2 className="text-success">{totalPlantas}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">🌿 Espécies</h6>
                <h2 className="text-success">{totalEspecies}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6 className="text-muted">📍 Locais</h6>
                <h2 className="text-success">{locais.length}</h2>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 🪴 PLANTAS */}
      <div className="row g-3 mt-4">

        {/* 🌱 Estado vazio */}
        {usuario && plantas.length === 0 && (
          <div className="text-center mt-4">
            <h5>🌱 Seu jardim ainda está vazio</h5>
            <p className="text-muted">
              Que tal cadastrar sua primeira planta?
            </p>
            <Link to="/plantas/nova" className="btn btn-success">
              + Nova Planta
            </Link>
          </div>
        )}

        {/* 🪴 Cards das plantas */}
        {plantasResumo.map(planta => (
          <PlantCard
            key={planta.id}
            nome={planta.nomePlanta}
            especie={mapaEspecies[planta.especieId]}
            local={planta.local}
            observacao={planta.observacoes}
          />
        ))}

      </div>

      {/* 👉 Ver todas */}
      {usuario && plantas.length > 3 && (
        <div className="text-center mt-4">
          <Link to="/plantas" className="btn btn-outline-success">
            Ver todas as plantas 🌿
          </Link>
        </div>
      )}
    </div>
  );
}