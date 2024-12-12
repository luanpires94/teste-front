import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="container-fluid text-center"
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "4rem 2rem",
      }}
    >
      <section className="mt-5">
        <h2>Sobre o FioTec</h2>
        <p>
          Este projeto demonstra como organizar, filtrar e gerenciar projetos
          favoritos usando React, Bootstrap.
        </p>
      </section>

      <section className="mt-5">
        <h2>O que você deseja fazer?</h2>
        <div className="d-flex justify-content-center flex-wrap mt-4">
          <Link
            to="/projetos-em-destaque"
            className="btn btn-outline-primary m-2"
            style={{ width: "200px" }}
          >
            Projetos em Destaque
          </Link>
          <Link
            to="/meus-favoritos"
            className="btn btn-outline-success m-2"
            style={{ width: "200px" }}
          >
            Meus Favoritos
          </Link>
        </div>
      </section>
    </div>
  );
}
