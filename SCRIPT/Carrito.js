function Carrito() {
  const [property, setProperty] = React.useState([
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
      imagen: "https://via.placeholder.com/300x200?text=Casa+Barranquilla",
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
      imagen: "https://via.placeholder.com/300x200?text=Casa+Bogota",
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
      imagen: "https://via.placeholder.com/300x200?text=Casa+Jamundi",
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
      imagen: "https://via.placeholder.com/300x200?text=Casa+Rionegro",
      latitud: 6.1532,
      longitud: -75.374,
    },
  ]);

  const [orden, setOrden] = React.useState("nombre");
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const nuevoTotal = property.reduce((sum, property) => {
      return sum + property.precio_actual * producto.cantidad;
    }, 0);
    setTotal(nuevoTotal);
  }, [property]);

  const propertyOrdenados = [...property].sort((a, b) => {
    switch (orden) {
      case "nombre":
        return a.nombre.localeCompare(b.nombre);
      case "precio":
        return a.precio - b.precio;
      case "categoria":
        return a.categoria.localeCompare(b.categoria);
      default:
        return 0;
    }
  });

  const cambiarCantidad = (id, nuevaCantidad) => {
    setProperty(
      property.map((p) =>
        p.id === id ? { ...p, cantidad: Math.max(1, nuevaCantidad) } : p
      )
    );
  };

  const eliminarProperty = (id) => {
    setProperty(property.filter((p) => p.id !== id));
  };

  return (
    <main className="carrito-container">
      <h1 className="carrito-title">Tu Carrito</h1>

      <select
        value={orden}
        onChange={(e) => setOrden(e.target.value)}
        className="ordenar-select"
      >
        <option value="nombre">Nombre</option>
        <option value="precio">Precio</option>
        <option value="ciudad">Ciudad</option>
        <option value="categoria">Categoria</option>
      </select>

      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {propertyOrdenados.map((property) => (
            <tr key={property.id} className="property">
              <td>
                <img
                  src={property.imagen}
                  alt={property.nombre}
                  className="property-img"
                />
              </td>
              <td>{property.nombre}</td>
              <td>{property.categoria}</td>
              <td className="precio">${property.precio_actual.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={property.cantidad}
                  min="0"
                  className="cantidad-input"
                  onChange={(e) =>
                    cambiarCantidad(property.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarProperty(property.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="carrito-total">
        <h3>
          Total: <span id="total-carrito">${total.toFixed(2)}</span>
        </h3>
        <h3>
          Descuento:{" "}
          <span id="descuento-carrito">
            {Math.round(
              ((property.precio_anterior - property.precio_actual) /
                property.precio_anterior) *
                100
            )}
            %
          </span>
        </h3>
        <button className="btn-comprar">Finalizar Compra</button>
      </div>
    </main>
  );
}

window.Carrito = Carrito;
