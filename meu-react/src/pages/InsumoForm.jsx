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

      <form onSubmit={salvar} className="mt-3">

        {/* Nome */}
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            className="form-control"
            name="nome"
            value={insumo.nome}
            onChange={handleChange}
            required
          />
        </div>

        {/* Quantidade */}
        <div className="mb-3">
          <label className="form-label">Quantidade</label>
          <input
            type="number"
            className="form-control"
            name="quantidade"
            value={insumo.quantidade}
            onChange={handleChange}
            required
          />
        </div>

        {/* Unidade de Medida */}
        <div className="mb-3">
          <label className="form-label">Unidade de Medida</label>
          <input
            className="form-control"
            name="unidadeMedida"
            value={insumo.unidadeMedida}
            onChange={handleChange}
            required
          />
        </div>

        {/* Categoria */}
        <div className="mb-3">
          <label className="form-label">Categoria</label>
          <input
            className="form-control"
            name="categoria"
            value={insumo.categoria}
            onChange={handleChange}
            required
          />
        </div>

        {/* Data de Validade */}
        <div className="mb-4">
          <label className="form-label">Data de Validade</label>
          <input
            type="date"
            className="form-control"
            name="dataValidade"
            value={insumo.dataValidade || ""}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">
          Salvar
        </button>
      </form>
    </div>
  );
}