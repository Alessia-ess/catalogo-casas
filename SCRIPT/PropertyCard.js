function PropertyCard({ img, nombre, precio, categoria, area }) {
  return (
    <div className="property-card">
      <img src={img} alt={nombre} className="property-img" />
      <div className="property-info">
        <h3 className="property-nombre">{nombre}</h3>
        <p className="property-categoria">{categoria}</p>
        <p className="property-area">{area}</p>
        <p className="property-precio">${precio}</p>
        <button className="btn-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
}
