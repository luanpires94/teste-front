export default function FilterBar() {
  return (
    <div
      className="filter-bar p-3 bg-light"
      style={{
        width: "300px",
        height: "600px",
        margin: "4rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h5 className="mb-3" style={{ textAlign: "left", paddingLeft: "10px" }}>
        Filtrar por Categoria
      </h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item border-0 bg-light">Todos</li>
        <li className="list-group-item border-0 bg-light">Ensino</li>
        <li className="list-group-item border-0 bg-light">Pesquisa</li>
        <li className="list-group-item border-0 bg-light">
          Estímulo à Inovação
        </li>
        <li className="list-group-item border-0 bg-light">Extensão</li>
        <li className="list-group-item border-0 bg-light">
          Desenvolvimento Institucional
        </li>
        <li className="list-group-item border-0 bg-light">
          Desenvolvimento Científico e Tecnológico
        </li>
      </ul>
    </div>
  );
}
