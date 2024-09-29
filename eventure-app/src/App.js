import './App.css';
import Departamentos from './Departamentos'; 

function App() {
  return (
    <div className="App">
      {/* Fonts */}
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
      </>

      {/* Fin fonts */}
      <header id="AllBanner">
        <img id="backgroundbanner" src="/backgroundbanner.png" alt="Background banner"/>
        <h1 id="Name">Eventure</h1>
        <h5 className="Header-button">SOBRE NOSOTROS</h5>
        <h5 className="Header-button">EVENTOS</h5>
        <h5 className="Header-button">CONTACTOS</h5>
      </header>
      <br></br>
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
      <App />  {/* Componente principal */}
      <Departamentos />  {/* Componente separado */}
    </>
  );
}

export default AllPage;
