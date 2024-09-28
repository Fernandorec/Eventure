import logo from './logo.svg';
import './App.css';

// Archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function banner() {
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
      <h1 id="Name" >Eventure</h1>
      <h5 class="Header-button" >SOBRE NOSOTROS</h5>
      <h5 class="Header-button">EVENTOS</h5>
      <h5 class="Header-button">CONTACTOS</h5>
      </header>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default banner;
