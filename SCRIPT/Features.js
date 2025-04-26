function Features() {
  return (
    <section className="features">
      <h2>¿Por qué elegirnos?</h2>
      <div className="features-grid">
        <FeatureCard
          iconClass="fas fa-tag"
          title="Precios competitivos"
          text="Los mejores precios y descuentos únicos"
        />
        <FeatureCard
          iconClass="fas fa-mobile-alt"
          title="Mejor ubicación"
          text="Encuentra el apartamento que quieras en zonas reconocidas"
        />
      </div>
    </section>
  );
}
