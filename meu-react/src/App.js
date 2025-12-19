import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

// Espécie
import EspecieList from "./pages/EspecieList";
import EspecieForm from "./pages/EspecieForm";

// Planta
import PlantaList from "./pages/PlantaList";
import PlantaForm from "./pages/PlantaForm";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* CRUD de Espécie */}
        <Route path="/especies" element={<EspecieList />} />
        <Route path="/especies/nova" element={<EspecieForm />} />
        <Route path="/especies/editar/:id" element={<EspecieForm />} />

        {/* CRUD de Planta */}
        <Route path="/plantas" element={<PlantaList />} />
        <Route path="/plantas/nova" element={<PlantaForm />} />
        <Route path="/plantas/editar/:id" element={<PlantaForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;