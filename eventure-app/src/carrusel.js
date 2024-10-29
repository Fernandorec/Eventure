import "./App.css";
import Departamentos from "./Departamentos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Carrusel</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="stilo.css" />
  <div id="carouselExampleIndicators" className="carousel" data-bs-ride="true">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={3}
        aria-label="Slide 4"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active d-item">
        <img
          src="https://i.pinimg.com/736x/81/6e/cb/816ecb6cba1f6781053a56dc20ff730c.jpg"
          className="d-block w-100 d-img"
          alt="slider 1"
        />
        <div className="carousel-caption top-0 mt-4">
          <p className="mt-5 fs-3 text-uppercase">descubre mas diseños de</p>
          <h1 className="display-1 fw-bolder text-capitalize">15 años</h1>
          <button className="btn btn-primary px-4 py-2 fs-5 custom-button-margin">
            More
          </button>
        </div>
      </div>
      <div className="carousel-item  d-item">
        <img
          src="https://i.pinimg.com/564x/17/14/19/17141921913c8b2176a615765d4683f6.jpg"
          className="d-block w-100 d-img"
          alt="slider 1"
        />
        <div className="carousel-caption top-0 mt-4">
          <p className="mt-5 fs-3 text-uppercase d-block">
            descubre mas diseños de
          </p>
          <h1 className="display-1 fw-bolder text-capitalize">Cumpleaños</h1>
          <button className="btn btn-primary px-4 py-2 fs-5 custom-button-margin">
            More
          </button>
        </div>
      </div>
      <div className="carousel-item  d-item">
        <img
          src="https://i.pinimg.com/564x/88/16/eb/8816eb3389b7c639e5b9023de2f9cc5e.jpg"
          className="d-block w-100 d-img"
          alt="slider 1"
        />
        <div className="carousel-caption top-0 mt-4">
          <p className="mt-5 fs-3 text-uppercase">descubre mas diseños de</p>
          <h1 className="display-1 fw-bolder text-capitalize">bodas</h1>
          <button className="btn btn-primary px-4 py-2 fs-5 custom-button-margin">
            More
          </button>
        </div>
      </div>
      <div className="carousel-item  d-item">
        <img
          src="https://i.pinimg.com/564x/17/14/19/17141921913c8b2176a615765d4683f6.jpg"
          className="d-block w-100 d-img"
          alt="slider 1"
        />
        <div className="carousel-caption top-0 mt-4">
          <p className="mt-5 fs-3 text-uppercase d-block">
            descubre mas diseños de
          </p>
          <h1 className="display-1 fw-bolder text-capitalize">Cumpleaños</h1>
          <button className="btn btn-primary px-4 py-2 fs-5 custom-button-margin">
            More
          </button>
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</>
