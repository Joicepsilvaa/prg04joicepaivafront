// Define e exporta o componente RosaDeserto, que exibe informações e variedades
export default function RosaDeserto() {
  return (
    // Container principal
    <div className="container mt-4">
      
      <h2 className="text-center text-danger">Adenium obesum</h2>
      
      <p className="text-center lead">
        A Rosa do Deserto é uma planta suculenta de origem africana.
      </p>

      {/* Linha (row) para organizar as imagens em grid, com espaçamento entre colunas*/}
      <div className="row g-4 mt-3">

        {/* Coluna 1: Ocupa 12 colunas em telas pequenas e 4 em telas médias*/}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <img src="/img/rosa4.jpg" className="img-rosa" alt="Flor rosa intensa" />
            <div className="card-body text-center">
              <h5 className="card-title">Flor rosa intensa</h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <img src="/img/rosa2.jpg" className="img-rosa" alt="Variedade dupla" />
            <div className="card-body text-center">
              <h5 className="card-title">Variedade dupla</h5>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <img src="/img/rosa3.jpg" className="img-rosa" alt="Flor branca rara" />
            <div className="card-body text-center">
              <h5 className="card-title">Flor branca rara</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}