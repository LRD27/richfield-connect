function AboutPage() {
  const guidelines = [
    'Respect every student and staff member in all online conversations.',
    'Share accurate information and avoid spreading rumours or misinformation.',
    'Use clear, professional language when engaging on campus updates and discussions.',
    'Protect your privacy and never share personal contact details in public posts.',
    'Support peers by promoting inclusion, wellbeing, and academic success.',
    'Promote student events and opportunities responsibly and with consent.',
  ];

  return (
    <section className="about-page card-panel">
      <h1>About Richfield Connect</h1>
      <p className="lead">
        Richfield Connect is a student-focused community hub that helps members stay informed,
        connected and supported throughout their academic journey.
      </p>

      <div className="guidelines-block">
        <h2>Guidelines</h2>
        <ul>
          {guidelines.map((guideline) => (
            <li key={guideline}>{guideline}</li>
          ))}
        </ul>
      </div>

      <div className="contact-block">
        <p>
          <strong>Email:</strong> support@richfield.ac.za
        </p>
        <p>
          <strong>Campus:</strong> 45 Main Road, Rosebank, Johannesburg
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
