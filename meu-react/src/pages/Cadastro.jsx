import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../services/usuarioService";

export default function Cadastro() {

  const navigate = useNavigate();

  function handleCadastro(e) {
    e.preventDefault();

    const dados = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      senha: e.target.senha.value
    };

    cadastrarUsuario(dados)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      })
      .catch(err => {
        alert(err.response?.data?.message || "Erro ao cadastrar usuário");
      });
  }

  return (
    <div className="bg-success bg-gradient d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5">

            <div className="card shadow-lg">
              <div className="card-body text-center">

                <h2 className="text-success">Cadastro</h2>
                <p className="text-secondary">
                  Crie sua conta no Sistema de Plantas 🌱
                </p>

                <form onSubmit={handleCadastro} className="text-start">

                  <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                      type="password"
                      name="senha"
                      className="form-control"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100 mb-2">
                    Cadastrar
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    onClick={() => navigate("/login")}
                  >
                    Voltar para login
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}