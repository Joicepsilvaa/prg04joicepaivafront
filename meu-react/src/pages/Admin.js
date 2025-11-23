// Define e exporta o componente Admin, responsavel pela listagem de usuarios
export default function Admin() {
  return (
    // Container principal da página de administração
    <div className="container mt-4">
      
      {/* Título principal da seção*/}
      <h1 className="text-center text-success">Usuários do Sistema</h1>

      {/* Div que torna a tabela responsiva em telas menores */}
      <div className="table-responsive mt-4">
        
        {/* Tabela para listar os dados*/}
        <table className="table table-bordered table-striped text-center">
          
          {/* Cabeçalho da tabela*/}
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th> {/* Coluna para os botões de ação */}
            </tr>
          </thead>
          
          {/* Corpo da tabela (tbody) aonde os dados são listados*/}
          <tbody>
            <tr>
              <td>01</td>
              <td>Maria Verde</td>
              <td>maria@plantas.com</td>
              <td>
                {/* Botões de ação para a linha: Editar e Excluir */}
                <button className="btn btn-sm btn-success">Editar</button>
                <button className="btn btn-sm btn-danger">Excluir</button>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>João Jardim</td>
              <td>joao@plantas.com</td>
              <td>
                <button className="btn btn-sm btn-success">Editar</button>
                <button className="btn btn-sm btn-danger">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}