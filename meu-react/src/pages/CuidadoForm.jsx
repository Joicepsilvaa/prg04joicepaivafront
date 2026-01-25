import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  criarCuidado,
  buscarCuidado,
  atualizarCuidado
} from "../services/cuidadoService";

export default function CuidadoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cuidado, setCuidado] = useState({
    tipo: "",
    data: "",
    observacoes: "",
    plantaId: ""
  });

  useEffect(() => {
    if (id) {
      buscarCuidado(id).then(res => {
        setCuidado({
          tipo: res.data.tipo,
          data: res.data.data,
          observacoes: res.data.observacoes || "",
          plantaId: res.data.plantaId
        });
      });
    }
  }, [id]);

  function handleChange(e) {
    setCuidado({ ...cuidado, [e.target.name]: e.target.value });
  }

  function salvar(e) {
    e.preventDefault();

    const dados = {
      ...cuidado,
      plantaId: Number(cuidado.plantaId)
    };

    const acao = id
      ? atualizarCuidado(id, dados)
      : criarCuidado(dados);

    acao.then(() => navigate("/cuidados"));
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Cuidado" : "Novo Cuidado"}</h2>

      <form onSubmit={salvar}>
        <input className="form-control mb-2"
          name="tipo"
          placeholder="Tipo (REGA, PODA...)"
          value={cuidado.tipo}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          type="date"
          name="data"
          value={cuidado.data}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          type="number"
          name="plantaId"
          placeholder="ID da Planta"
          value={cuidado.plantaId}
          onChange={handleChange}
          required
        />

        <textarea className="form-control mb-3"
          name="observacoes"
          placeholder="Observações"
          value={cuidado.observacoes}
          onChange={handleChange}
        />

        <button className="btn btn-success">Salvar</button>
      </form>
    </div>
  );
}
