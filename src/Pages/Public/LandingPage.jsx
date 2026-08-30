import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✦</span> Find your perfect school
            </div>

            <h1>
              Find the right school.
              <span> Find the right opportunity.</span>
            </h1>

            <p>
              Discover schools, student vacancies, job opportunities,
              fee structures and more — all in one place.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="primary-button">
                Get Started <span>→</span>
              </Link>

              <a href="#how-it-works" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>500+</strong>
                <small>Schools</small>
              </div>

              <div>
                <strong>2,000+</strong>
                <small>Vacancies</small>
              </div>

              <div>
                <strong>10K+</strong>
                <small>Users</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <div className="school-image">
                🏫
              </div>

              <div className="school-card-content">
                <span className="verified">✓ Verified School</span>

                <h3>Green Valley Academy</h3>

                <p>📍 Westlands, Nairobi</p>

                <div className="card-bottom">
                  <span>🪑 12 vacancies</span>
                  <span>⭐ 4.8</span>
                </div>
              </div>
            </div>

            <div className="floating-card vacancy-floating">
              <div className="floating-icon">🎓</div>
              <div>
                <strong>12 Vacancies</strong>
                <small>Available now</small>
              </div>
            </div>

            <div className="floating-card location-floating">
              <div className="floating-icon">📍</div>
              <div>
                <strong>Search by location</strong>
                <small>Find schools near you</small>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section" id="how-it-works">
          <div className="section-heading">
            <span>EVERYTHING IN ONE PLACE</span>
            <h2>Making school discovery easier</h2>
            <p>
              Everything parents, students and schools need to connect
              and make better decisions.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔎</div>
              <h3>Find Schools</h3>
              <p>
                Search and discover schools based on your preferred
                location, school level and other requirements.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Search by Location</h3>
              <p>
                Find schools in your preferred county, city, town or
                neighbourhood.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🪑</div>
              <h3>View Vacancies</h3>
              <p>
                Easily find available student spaces and school job
                opportunities.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Compare Fees</h3>
              <p>
                View school fee structures and important information
                before making your decision.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Book a Visit</h3>
              <p>
                Book a school visit or admission appointment directly
                through the platform.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏫</div>
              <h3>For Schools</h3>
              <p>
                Schools can create profiles, post vacancies and manage
                applications and bookings.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="about">
          <div className="about-content">
            <span>FOR PARENTS & STUDENTS</span>
            <h2>
              Your search for the right school starts here.
            </h2>

            <p>
              SchoolFind brings school information, vacancies, fees and
              applications together in one convenient platform.
            </p>

            <ul>
              <li>✓ Discover schools based on location</li>
              <li>✓ Check available student vacancies</li>
              <li>✓ View school information and fees</li>
              <li>✓ Apply or book a school visit</li>
            </ul>

            <Link to="/register" className="primary-button">
              Start Exploring <span>→</span>
            </Link>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🏫</div>
            <h3>One platform.</h3>
            <h3>Many opportunities.</h3>
            <p>
              Connecting students, parents and schools.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Ready to find your next opportunity?</h2>
          <p>
            Join SchoolFind and make school discovery simpler.
          </p>

          <Link to="/register" className="cta-button">
            Create Your Account →
          </Link>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>School<span>Find</span></strong>
          <p>Connecting students, parents and schools.</p>
        </div>

        <p>© 2026 SchoolFind. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;