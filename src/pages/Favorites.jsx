import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((project) => project.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div
      className="container-fluid"
      style={{ maxWidth: "1440px", margin: "0 auto" }}
    >
      <div className="container-fluid">
        <h4 className="mt-4 mb-4">Meus Favoritos</h4>
      </div>
      {favorites.length > 0 && (
        <div className="container-fluid">
          {favorites.map((project) => (
            <div
              key={project.id}
              className="card mb-3 border-0"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={project.image}
                    className="img-fluid rounded-start"
                    alt={project.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => handleRemoveFavorite(project.id)}
                        className="btn btn-danger rounded-pill"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
