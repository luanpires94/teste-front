import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FilterBar from "../components/FilterBar";
import viewIcon from "../assets/images/view_icon.png";
import heartIcon from "../assets/images/heart_icon.png";

export default function Highlights() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/projetos")
      .then((response) => {
        setProjects(response.data);
        setFilteredProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar projetos:", error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handleFavorite = (project) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((fav) => fav.id === project.id)) {
      favorites.push(project);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert(`${project.title} foi adicionado aos favoritos!`);
    } else {
      alert(`${project.title} já está nos favoritos!`);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-between"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <FilterBar onFilter={handleFilter} activeFilter={activeFilter} />
      <div className="container-lg ml-1">
        <div
          className="d-flex justify-content-between"
          style={{ margin: "4rem 0 2rem 2rem" }}
        >
          <h4>Projetos em Destaque</h4>
          <p style={{ paddingRight: "7rem" }}>
            Mostrando {filteredProjects.length} de {projects.length} resultados.
          </p>
        </div>
        <div className="container-fluid d-flex flex-wrap">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card"
                style={{ width: "18rem", margin: "2rem" }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p
                    className="card-text"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/project-details/${project.id}`}
                      className="btn btn-light rounded-pill d-flex align-items-center justify-content-center"
                    >
                      <img
                        style={{ width: "20px" }}
                        src={viewIcon}
                        alt="view"
                      />
                      <p className="m-1">Acessar</p>
                    </Link>

                    <a
                      href="#"
                      onClick={() => handleFavorite(project)}
                      className="btn btn-light rounded-pill d-flex align-items-center justify-content-center"
                    >
                      <img
                        style={{ width: "20px" }}
                        src={heartIcon}
                        alt="favoritar"
                      />
                      <p className="m-1">Favoritar</p>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Nenhum projeto encontrado.</div>
          )}
        </div>
      </div>
      <style>{`
        .active-filter {
          color: #008abd !important;
        }
      `}</style>
    </div>
  );
}
