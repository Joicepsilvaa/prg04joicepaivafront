import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  function logout() {
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🌿 Meu Jardim
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* 🏠 Início */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Início
              </Link>
            </li>

            {/* 🔒 Somente logado */}
            {usuario && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/especies">Espécies</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/plantas">Plantas</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/insumos">Insumos</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/agendas">Agendas</Link>
                </li>
                
              </>
            )}

            {/* 🔐 Login / Logout */}
            {!usuario ? (
              <li className="nav-item ms-lg-3">
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item ms-lg-3">
                <button className="btn btn-outline-light" onClick={logout}>
                  Logout
                </button>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
