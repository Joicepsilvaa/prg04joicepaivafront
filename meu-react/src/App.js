import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importa todas as páginas que serão usadas nas rotas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import RosaDeserto from "./pages/RosaDeserto";

// O componente App, que é a raiz da aplicação
function App() {
  return (
    // <Router> envolve toda a aplicação para habilitar o roteamento (navegação)
    <Router>
      {/* Navbar é exibida em todas as páginas */}
      <Navbar />

      {/* <Routes> define onde as páginas serão renderizadas com base na URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/rosa" element={<RosaDeserto />} />
      </Routes>

      <Footer />
    </Router>
  );
}

// Exporta o componente App para ser usado no index.js
export default App;