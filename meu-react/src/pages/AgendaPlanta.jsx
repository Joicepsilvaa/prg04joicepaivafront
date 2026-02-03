import { useEffect, useState } from "react";
import { listarAgendasPorPlanta } from "../services/agendaService";
import { useParams } from "react-router-dom";

export default function AgendaPlanta() {

  const { plantaId } = useParams();
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    listarAgendasPorPlanta(plantaId)
      .then(res => setAgendas(res.data));
  }, [plantaId]);

  return (
    <div className="container mt-4">
      <h2>Agenda da Planta</h2>

      <ul className="list-group">
        {agendas.map(a => (
          <li key={a.id} className="list-group-item">
            {a.descricao} - {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
