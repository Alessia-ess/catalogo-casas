function CatalogoApp() {
  return (
    <div>
      <Navbar />
      <Catalogo />
      <Footer />
    </div>
  );
}

ReactDOM.render(<CatalogoApp />, document.getElementById("root"));
