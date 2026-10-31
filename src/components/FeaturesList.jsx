const funcionalidades = [
  'Cadastro de novos itens',
  'Filtro e busca em tempo real',
  'Listagem dinâmica de dados',
  'Interface responsiva e reativa',
];

export default function FeaturesList() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="section-heading">
        <span className="eyebrow">O QUE ESTAMOS CONSTRUINDO</span>
        <h2 id="features-title">Funcionalidades do projeto</h2>
      </div>

      <ul className="feature-list">
        {funcionalidades.map((item) => (
          <li className="feature-item" key={item}>
            <span className="feature-check" aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
