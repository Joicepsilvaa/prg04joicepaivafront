import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { criarPlanta, buscarPlanta, atualizarPlanta } from "../services/plantaService";

export default function PlantaForm() {
  // Pega o ID da URL se for edição, e o hook para navegação
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Estado da planta com valores iniciais
  const [planta, setPlanta] = useState({
    nomePlanta: "",
    especieId: "", // Guarda o ID da espécie como string ou número
    local: "",
    observacoes: ""
  });

  // Se tiver ID, busca a planta pra preencher o formulário
  useEffect(() => {
    if (id) {
      buscarPlanta(id)
        .then(res => {
          // Formata os dados que vêm da API pro estado do formulário
          // O backend pode retornar especieId direto ou especie.id
          setPlanta({
            nomePlanta: res.data.nomePlanta || "",
            especieId: res.data.especieId || res.data.especie?.id || "",
            local: res.data.local || "",
            observacoes: res.data.observacoes || ""
          });
        })
        .catch(error => {
          console.error("Erro ao carregar planta:", error);
          alert("Erro ao carregar dados da planta");
        });
    }
  }, [id]);

  // Atualiza o estado quando o usuário digita
  function handleChange(e) {
    const { name, value } = e.target;
    
    // Tratamento especial para o ID da espécie - converte pra número
    if (name === "especieId") {
      setPlanta({ ...planta, [name]: value === "" ? "" : Number(value) });
    } else {
      setPlanta({ ...planta, [name]: value });
    }
  }

  // Salva ou atualiza a planta
  function salvar(e) {
    e.preventDefault(); // Evita recarregar a página
    
    // Prepara os dados no formato que o backend espera
    const dadosParaEnviar = {
      nomePlanta: planta.nomePlanta,
      especieId: Number(planta.especieId), // Garante que é número
      local: planta.local,
      observacoes: planta.observacoes || "" // Se for null/undefined, manda string vazia
    };
    
    console.log("Enviando:", dadosParaEnviar); // Pra debug
    
    // Decide se é criação ou edição
    const acao = id
      ? atualizarPlanta(id, dadosParaEnviar)
      : criarPlanta(dadosParaEnviar);

    // Se der certo, volta pra lista de plantas
    // Se der erro, mostra no console e alerta
    acao
      .then(() => navigate("/plantas"))
      .catch(error => {
        console.error("Erro:", error.response?.data);
        alert(`Erro: ${JSON.stringify(error.response?.data)}`);
      });
  }

  return (
    <div className="container mt-4">
      <h2>{id ? "Editar Planta" : "Nova Planta"}</h2>

      <form onSubmit={salvar}>
        <div className="mb-3">
          <label className="form-label">Nome da Planta *</label>
          <input
            className="form-control"
            name="nomePlanta"
            placeholder="Nome da planta"
            value={planta.nomePlanta}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ID da Espécie *</label>
          <input
            type="number"
            className="form-control"
            name="especieId"
            placeholder="Digite o ID da espécie"
            value={planta.especieId}
            onChange={handleChange}
            required
            min="1" // Não aceita zero ou negativo
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Local *</label>
          <input
            className="form-control"
            name="local"
            placeholder="Ex: Sala, Quarto"
            value={planta.local}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Observações</label>
          <textarea
            className="form-control"
            name="observacoes"
            placeholder="Observações"
            value={planta.observacoes}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-success">
          {id ? "Atualizar" : "Salvar"}
        </button>
        <button 
          type="button" 
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/plantas")} // Volta pra lista sem salvar
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}