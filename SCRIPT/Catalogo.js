function Catalogo() {
  const property = [
    {
      id: 1,
      ciudad: "Barranquilla",
      nombre: "Macarol",
      categoria: "Apartamento",
      precio_actual: 321100000,
      precio_anterior: 435141509,
      area: "80m²",
      habitaciones: 3,
      baños: 2,
      parqueaderos: 1,
      imagen:
        "https://www.360agenciainmobiliaria.com/articulo/Sectores-en-Bogota.jpeg",
      latitud: 10.9639,
      longitud: -74.7964,
    },
    {
      id: 2,
      ciudad: "Bogotá",
      nombre: "Pinar de la Fontana",
      categoria: "Casa",
      precio_actual: 255000000,
      precio_anterior: 315000000,
      area: "58m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 0,
      imagen:
        "https://www.360agenciainmobiliaria.com/inmuebles/20200611190646_96924e41-0e9c-4c63-9ac8-565b66ea301f.jpg",
      latitud: 4.711,
      longitud: -74.0721,
    },
    {
      id: 3,
      ciudad: "Jamundí",
      nombre: "Tangara",
      categoria: "Apartamento",
      precio_actual: 350000000,
      precio_anterior: 400000000,
      area: "100m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen:
        "https://www.360agenciainmobiliaria.com/inmuebles/20210318020311_yerba.jpg",
      latitud: 3.263,
      longitud: -76.5377,
    },
    {
      id: 4,
      ciudad: "Rionegro",
      nombre: "Alejandría",
      categoria: "Lote",
      precio_actual: 190000000,
      precio_anterior: 240000000,
      area: "54m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen:
        "https://www.360agenciainmobiliaria.com/inmuebles/gal1_20210318000338.jpg",
      latitud: 6.1532,
      longitud: -75.374,
    },
  ];

  const [carrito, setCarrito] = React.useState([]);
  const [detalle, setDetalle] = React.useState(null);
  const [categoria, setCategoria] = React.useState("Todos");
  const [orden, setOrden] = React.useState("default");

  const agregarAlCarrito = (property) => {
    setCarrito([...carrito, property]);
    alert(`${property.nombre} agregado al carrito!`);
  };

  const verDetalle = (property) => {
    setDetalle(property);
  };

  const volverAlCatalogo = () => {
    setDetalle(null);
  };

  const filtrarYOrdenarPropiedades = () => {
    let propiedadesFiltradas = property;

    if (categoria !== "Todos") {
      propiedadesFiltradas = propiedadesFiltradas.filter(
        (prop) => prop.categoria === categoria
      );
    }

    if (orden === "menor-mayor") {
      propiedadesFiltradas.sort((a, b) => a.precio_actual - b.precio_actual);
    } else if (orden === "mayor-menor") {
      propiedadesFiltradas.sort((a, b) => b.precio_actual - a.precio_actual);
    }

    return propiedadesFiltradas;
  };

  const propiedadesFiltradas = filtrarYOrdenarPropiedades();

  return (
    <main className="catalogo-container">
      <h1 className="catalogo-title">Catálogo de propiedades</h1>

      <div className="filtros-container">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="filtro-select"
        >
          <option value="Todos">Todos</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Lote">Lote</option>
        </select>

        <select
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
          className="filtro-select"
        >
          <option value="default">Ordenar</option>
          <option value="menor-mayor">Precio: Menor a Mayor</option>
          <option value="mayor-menor">Precio: Mayor a Menor</option>
        </select>
      </div>

      {detalle ? (
        <div className="detalle-container">
          <button className="btn-volver" onClick={volverAlCatalogo}>
            Volver al Catálogo
          </button>
          <div className="detalle-card">
            <img
              src={detalle.imagen}
              alt={detalle.nombre}
              className="detalle-img"
            />
            <div className="detalle-info">
              <h2>{detalle.nombre}</h2>
              <p>
                <strong>Ciudad:</strong> {detalle.ciudad}
              </p>
              <p>
                <strong>Categoria:</strong> {detalle.categoria}
              </p>
              <p>
                <strong>Área:</strong> {detalle.area}
              </p>
              <p>
                <strong>Habitaciones:</strong> {detalle.habitaciones}
              </p>
              <p>
                <strong>Precio Actual:</strong> $
                {detalle.precio_actual.toFixed(2)}
              </p>
              <p>
                <strong>Precio Anterior:</strong> $
                {detalle.precio_anterior.toFixed(2)}
              </p>
              <h3>Ubicación:</h3>
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${longitud.latitud},${detalle.longitud}&output=embed`}
              ></iframe>
              <a
                href={`https://www.google.com/maps?q=${longitud.latitud},${detalle.longitud}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-maps"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="property-grid">
          {propiedadesFiltradas.map((property) => (
            <div key={property.id} className="property-card">
              <img
                src={property.imagen}
                alt={property.nombre}
                className="property-img"
                onError={(e) => (e.target.src = "img/placeholder.jpg")}
              />
              <div className="property-info">
                <h3>{property.nombre}</h3>
                <p className="property-precio_actual">
                  ${property.precio_actual.toFixed(2)}
                </p>
                <p className="property-descuento">
                  Descuento:{" "}
                  {Math.round(
                    ((property.precio_anterior - property.precio_actual) /
                      property.precio_anterior) *
                      100
                  )}
                  %
                </p>
                <button
                  className="btn-agregar"
                  onClick={() => agregarAlCarrito(property)}
                >
                  <i className="fas fa-cart-plus"></i> Agregar
                </button>
                <button
                  className="btn-detalle"
                  onClick={() => verDetalle(property)}
                >
                  Ver Detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

window.Catalogo = Catalogo;
