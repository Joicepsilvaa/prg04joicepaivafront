// Importa o componente PlantCard para mostrar os dados de cada planta
import PlantCard from "../components/PlantCard";

// Define e exporta o componente principal da página (Home)
export default function Home() {
  return (
    // Container principal 
    <div className="container mt-4">
      
      <h1 className="text-center text-success">Minhas Plantas</h1>
      
      <p className="text-center lead">Sistema para cuidar das suas plantinhas 🌱</p>

      <div className="row g-3 mt-3">
        <PlantCard nome="Suculenta" sol="Meia-sombra" agua="1x por semana" />
        
        <PlantCard nome="Roseira" sol="Sombra" agua="2x por semana" />
        
        <PlantCard nome="Cacto" sol="Pleno sol" agua="1x a cada 15 dias" />
      </div>
    </div>
  );
}