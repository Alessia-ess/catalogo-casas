function About() {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más acerca de nuestra misión, visión y valores.</p>
      </div>

      <div className="about-content">
        <div className="about-item">
          <h2>Misión</h2>
          <p>
            En Casa Linda, nos dedicamos a ofrecer las mejores propiedades del
            país a precios accesibles para todos. Nuestro compromiso es
            brindarte una experiencia de compra única, con atención
            personalizada y entrega rápida.
          </p>
        </div>

        <div className="about-item">
          <h2>Visión</h2>
          <p>
            Ser la tienda en línea líder en ventas de propiedades, ofreciendo
            productos de calidad y confiabilidad, con un servicio de atención al
            cliente excepcional y accesible en todo momento.
          </p>
        </div>

        <div className="about-item">
          <h2>Valores</h2>
          <ul>
            <li>
              <i className="fas fa-rocket"></i> Innovación constante
            </li>
            <li>
              <i className="fas fa-award"></i> Compromiso con la calidad
            </li>
            <li>
              <i className="fas fa-headset"></i> Servicio al cliente excepcional
            </li>
            <li>
              <i className="fas fa-handshake"></i> Transparencia y confianza
            </li>
          </ul>
        </div>

        <div className="about-item">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            En Casa Linda, nos importa cada cliente y cada detalle. Nos
            esforzamos por ofrecerte las mejores propiedades y asegurarnos de
            que tu experiencia de compra sea sencilla y agradable. Con nosotros,
            encuentras calidad, precio y confianza en un solo lugar.
          </p>
        </div>
      </div>
    </section>
  );
}

window.About = About;
