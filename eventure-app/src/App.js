import "./App.css";
import Departamentos from "./Departamentos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      {/* Fonts */}
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&display=swap"
          rel="stylesheet"
        />
      </>

      {/* Fin fonts */}
      <header id="AllBanner">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "#3d2669" }}
        >
          <div class="container-fluid">
            <a
              id="Name"
              class="navbar-brand"
              href="#"
              style={{ color: "white" }}
            >
              Eventure
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColorcolor: "white" }}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    SOBRE NOSOTROS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    EVENTOS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{ color: "white" }}>
                    CONTACTOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </div>
  );
}

// Esta funcion renderiza too bloque por bloque tanto el banner, departamentos etc.
function AllPage() {
  return (
    <>
      <App /> {/* Componente principal */}
      <Departamentos /> {/* Componente separado */}
    </>
  );
}

export default AllPage;
