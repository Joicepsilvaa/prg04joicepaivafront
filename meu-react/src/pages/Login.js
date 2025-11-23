import { useNavigate } from "react-router-dom";

// Define e exporta o componente Login
export default function Login() {

  const navigate = useNavigate(); // necessário para redirecionar

  function handleLogin(e) {
    e.preventDefault(); 
    navigate("/admin"); // redireciona sem recarregar a página
  }

  return (
    <div className="bg-success bg-gradient d-flex align-items-center justify-content-center vh-100">
      
      {/* Container padrão do Bootstrap */}
      <div className="container">
        <div className="row justify-content-center">
          
          {/* Define a largura do formulário em diferentes tamanhos de tela */}
          <div className="col-10 col-sm-8 col-md-5">
            
            {/* Card que conm o formulário de login*/}
            <div className="card shadow-lg">
              <div className="card-body text-center">
                
                <h2 className="text-success">Bem-vindo</h2>
                <p className="text-secondary">Acesse o Sistema de Plantas</p>

                {/* Formulário de login com redirecionamento React Router */}
                <form onSubmit={handleLogin} className="text-start">
                  
                  {/* Campo de E-mail */}
                  <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input type="email" className="form-control" required />
                  </div>
                  
                  {/* Campo de Senha */}
                  <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input type="password" className="form-control" required />
                  </div>

                  {/* Botão de envio */}
                  <button type="submit" className="btn btn-success w-100">
                    Entrar
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