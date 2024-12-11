export default function FilterBar({ onFilter, activeFilter }) {
  const categories = [
    "Ensino",
    "Pesquisa",
    "Estímulo à Inovação",
    "Extensão",
    "Desenvolvimento Institucional",
    "Desenvolvimento Científico e Tecnológico",
  ];

  return (
    <div
      className="filter-bar p-3 bg-light"
      style={{
        width: "300px",
        height: "600px",
        margin: "4rem 0 0 0",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h5 className="mb-3" style={{ textAlign: "left", paddingLeft: "10px" }}>
        Filtrar por Categoria
      </h5>
      <ul className="list-group list-group-flush">
        <a
          href="#"
          className="link-underline link-underline-opacity-0"
          onClick={(e) => {
            e.preventDefault();
            onFilter("");
          }}
        >
          <li
            className={`list-group-item border-0 bg-light ${
              activeFilter === "" ? "active-filter" : ""
            }`}
          >
            Todos
          </li>
        </a>
        {categories.map((category, index) => (
          <a
            href="#"
            key={index}
            className="link-underline link-underline-opacity-0"
            onClick={(e) => {
              e.preventDefault();
              onFilter(category);
            }}
          >
            <li
              className={`list-group-item border-0 bg-light ${
                activeFilter === category ? "active-filter" : ""
              }`}
            >
              {category}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
