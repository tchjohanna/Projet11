import './banner_module.scss';

function Banner() {
  const subtitles = ["No fees.", "No minimum deposit.", "High interest rates."];

  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <p className="subtitle" key={index}>
            {subtitle}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Banner;
