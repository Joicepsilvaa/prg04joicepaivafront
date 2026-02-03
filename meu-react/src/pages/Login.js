import { useNavigate } from "react-router-dom";
import { loginUsuario } from "../services/usuarioService";

export default function Login() {

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const dados = {
      email: e.target.email.value,
      senha: e.target.senha.value
    };

    loginUsuario(dados)
      .then(res => {
        localStorage.setItem("usuario", JSON.stringify(res.data));
        navigate("/especies");
      })
      .catch(err => {
        alert(err.response?.data?.message || "Erro no login");
      });
  }

  return (
    <div className="bg-success bg-gradient d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-5">

            <div className="card shadow-lg">
              <div className="card-body text-center">

                <h2 className="text-success">Bem-vindo</h2>
                <p className="text-secondary">Acesse o Sistema de Plantas</p>

                <form onSubmit={handleLogin} className="text-start">

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
                    Entrar
                  </button>

                  {/* Botão de cadastro */}
                  <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    onClick={() => navigate("/usuarios/novo")}
                  >
                    Cadastrar usuário
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
