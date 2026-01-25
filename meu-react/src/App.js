import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UsuarioForm from "./pages/UsuarioForm";

// Espécie
import EspecieList from "./pages/EspecieList";
import EspecieForm from "./pages/EspecieForm";

// Planta
import PlantaList from "./pages/PlantaList";
import PlantaForm from "./pages/PlantaForm";

// Insumo
import InsumoList from "./pages/InsumoList";
import InsumoForm from "./pages/InsumoForm";

// Cuidado
import CuidadoList from "./pages/CuidadoList";
import CuidadoForm from "./pages/CuidadoForm";

import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios/novo" element={<UsuarioForm />} />

        {/* Espécies */}
        <Route path="/especies" element={
          <PrivateRoute><EspecieList /></PrivateRoute>
        } />
        <Route path="/especies/nova" element={
          <PrivateRoute><EspecieForm /></PrivateRoute>
        } />
        <Route path="/especies/editar/:id" element={
          <PrivateRoute><EspecieForm /></PrivateRoute>
        } />

        {/* Plantas */}
        <Route path="/plantas" element={
          <PrivateRoute><PlantaList /></PrivateRoute>
        } />
        <Route path="/plantas/nova" element={
          <PrivateRoute><PlantaForm /></PrivateRoute>
        } />
        <Route path="/plantas/editar/:id" element={
          <PrivateRoute><PlantaForm /></PrivateRoute>
        } />

        {/* Insumos */}
        <Route path="/insumos" element={
          <PrivateRoute><InsumoList /></PrivateRoute>
        } />
        <Route path="/insumos/novo" element={
          <PrivateRoute><InsumoForm /></PrivateRoute>
        } />
        <Route path="/insumos/editar/:id" element={
          <PrivateRoute><InsumoForm /></PrivateRoute>
        } />

        {/* Cuidados */}
        <Route path="/cuidados" element={
          <PrivateRoute><CuidadoList /></PrivateRoute>
        } />
        <Route path="/cuidados/novo" element={
          <PrivateRoute><CuidadoForm /></PrivateRoute>
        } />
        <Route path="/cuidados/editar/:id" element={
          <PrivateRoute><CuidadoForm /></PrivateRoute>
        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;