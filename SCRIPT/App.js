document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <App />,
    document.getElementById("root") || document.createElement("div") // Fallback por si no existe
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Destacados />
      <Promo />
      <Footer />
    </div>
  );
}
