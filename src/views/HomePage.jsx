import { Link } from 'react-router-dom';

function HomePage() {
  const features = [
    {
      title: 'Campus Connections',
      text: 'Meet like-minded students, peer mentors, and support teams across your campus.',
    },
    {
      title: 'Study Support',
      text: 'Access shared study resources, events, and collaborative group opportunities.',
    },
    {
      title: 'Student Life',
      text: 'Stay informed about student activities, announcements and campus wellbeing initiatives.',
    },
  ];

  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to</p>
          <h1>Richfield Connect</h1>
          <p className="slogan">Learn together. Grow together. Belong together.</p>
          <Link to="/signup" className="primary-btn hero-btn">
            Register Now
          </Link>
        </div>
        <div className="hero-logo" aria-label="Richfield Connect logo placeholder">
          RC
        </div>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card card-panel">
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
