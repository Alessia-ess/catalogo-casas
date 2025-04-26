function FeatureCard({ iconClass, title, text }) {
  return (
    <div className="feature-card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
