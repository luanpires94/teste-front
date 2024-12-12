import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        const projectData = response.data.projetos.find(
          (project) => project.id === Number(id)
        );
        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar projeto:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <section style={{ margin: "0 auto", maxWidth: "800px" }}>
      <div className="border-0 m-5">
        <Link to="/projetos-em-destaque">Voltar</Link>
        <h5 style={{ fontWeight: "bold" }} className="card-title mt-4 mb-4">
          {project.title}
        </h5>
        <img
          src={project.image}
          style={{ maxWidth: "100%", height: "auto" }}
          alt={project.title}
        />
        <div className="card-body">
          <p className="card-text">{project.description}</p>
        </div>
      </div>
    </section>
  );
}
