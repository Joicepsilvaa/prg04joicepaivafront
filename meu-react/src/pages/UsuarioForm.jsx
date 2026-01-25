import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../services/usuarioService";

export default function UsuarioForm() {

  const navigate = useNavigate();

  function salvar(e) {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      senha: e.target.senha.value
    };

    cadastrarUsuario(dados)
      .then(() => navigate("/login"))
      .catch(err => alert(err.response?.data?.message));
  }

  return (
    <div className="container mt-4">
      <h2>Cadastrar Usuário</h2>

      <form onSubmit={salvar}>
        <input className="form-control mb-2"
          name="nome"
          placeholder="Nome"
          required
        />

        <input className="form-control mb-2"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />

        <input className="form-control mb-3"
          type="password"
          name="senha"
          placeholder="Senha"
          required
        />

        <button className="btn btn-success">Cadastrar</button>
      </form>
    </div>
  );
}
