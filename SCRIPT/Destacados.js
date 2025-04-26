function Destacados() {
  return (
    <section className="destacados">
      <h2>Apartamentos destacados</h2>
      <div className="property-grid">
        <div className="property-card">
          <img
            src="https://www.360agenciainmobiliaria.com/inmuebles/gal1_20210318000338.jpg"
            alt="Tangara 13"
          />
          <h3>Tangara</h3>
          <p>350000000</p>
        </div>
        <div className="producto-card">
          <img
            src="https://www.360agenciainmobiliaria.com/inmuebles/20210318020311_yerba.jpg"
            alt="Macarol"
          />
          <h3>Macarol</h3>
          <p>321100000</p>
        </div>
        <div className="producto-card">
          <img
            src="https://www.360agenciainmobiliaria.com/articulo/Sectores-en-Bogota.jpeg"
            alt="Pinar de la Fontana"
          />
          <h3>Pinar de la Fontana</h3>
          <p>255000000</p>
        </div>
      </div>
    </section>
  );
}
