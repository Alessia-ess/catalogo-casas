function Navbar({ currentPage }) {
  const navigate = (page) => {
    if (page === "catalogo") window.location.href = "catalogo.html";
    else if (page === "home") window.location.href = "index.html";
  };
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Casa Linda</span>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        ☰
      </label>

      <ul className="nav-links">
        <li>
          <a href="index.html" className="active">
            Inicio
          </a>
        </li>
        <li>
          <a href="catalogo.html">Catálogo</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="carrito.html">
            <i className="fas fa-shopping-cart"></i> Carrito
          </a>
        </li>
      </ul>
    </nav>
  );
}

window.Navbar = Navbar;
