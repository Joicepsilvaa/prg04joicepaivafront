import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  criarInsumo,
  buscarInsumo,
  atualizarInsumo
} from "../services/insumoService";

export default function InsumoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [insumo, setInsumo] = useState({
    nome: "",
    quantidade: "",
    unidadeMedida: "",
    categoria: "",
    dataValidade: ""
  });

  useEffect(() => {
    if (id) {
      buscarInsumo(id).then(res => setInsumo(res.data));
    }
  }, [id]);

  function handleChange(e) {
    setInsumo({ ...insumo, [e.target.name]: e.target.value });
  }

  function salvar(e) {
    e.preventDefault();

    const dados = {
      ...insumo,
      quantidade: Number(insumo.quantidade)
    };

    const acao = id
      ? atualizarInsumo(id, dados)
      : criarInsumo(dados);

    acao.then(() => navigate("/insumos"));
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Insumo" : "Novo Insumo"}</h2>

      <form onSubmit={salvar}>
        <input className="form-control mb-2"
          name="nome"
          placeholder="Nome"
          value={insumo.nome}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={insumo.quantidade}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          name="unidadeMedida"
          placeholder="Unidade de Medida"
          value={insumo.unidadeMedida}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-2"
          name="categoria"
          placeholder="Categoria"
          value={insumo.categoria}
          onChange={handleChange}
          required
        />

        <input className="form-control mb-3"
          type="date"
          name="dataValidade"
          value={insumo.dataValidade || ""}
          onChange={handleChange}
        />

        <button className="btn btn-success">Salvar</button>
      </form>
    </div>
  );
}
