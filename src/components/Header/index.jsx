import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";
import UserImg from "../../assets/images/user_icon.png";

export default function Header() {
  return (
    <header style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)" }}>
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-center align-items-center"
        style={{ maxWidth: "1440px", margin: "0 auto" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={LogoImg} alt="logo" width="150" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item font-weight-bold">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/projetos-em-destaque"
                >
                  Projetos em Destaque
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/meus-favoritos"
                >
                  Meus Favoritos
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="d-flex justify-content-center align-items-center rounded-circle bg-light"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            <img
              src={UserImg}
              alt="user icon"
              width="30px"
              className="rounded-circle"
            />
          </div>
        </div>
      </nav>

      <style>{`
        .nav-link.active {
          color: #008abd !important;
        }
      `}</style>
    </header>
  );
}
