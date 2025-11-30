import React from "react";
import { Link } from "react-router-dom"; 
import data from "../data/data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const { services, testimonials } = data;

  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="hero py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-5 mb-3 fw-bold">
            Find Trusted <span className="text-success">Services</span><br />Near You
          </h1>
          <p className="text-muted mb-4 fs-5">
            Connect with verified professionals for all your home and personal service needs.
          </p>
          <Link to="/booking" className="btn btn-success btn-lg">Get Started</Link>
        </div>
      </section>

      {/* Popular services section */}
      <section className="py-5" id="services">
        <div className="container">
          <h2 className="section-title text-center mb-2">Popular Services</h2>
          <p className="section-subtitle text-center text-muted mb-5">Choose from our wide range of professional services</p>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {services.slice(0, 7).map((service) => (
              <Link 
                key={service.id}
                to={`/service-details/${service.id}`} 
                className="service-card p-4 border rounded shadow-sm text-center text-decoration-none text-dark d-block bg-white"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="service-icon fs-2 text-success mb-3">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <div className="service-title fw-bold">{service.name}</div>
                <div className="service-subtitle text-muted small">{service.description}</div>
              </Link>
            ))}

            {/* View more card */}
            <Link to="/services" className="service-card p-4 border rounded shadow-sm text-center d-flex flex-column justify-content-center align-items-center bg-light text-decoration-none text-dark">
              <div className="service-icon fs-2 text-success mb-2"><i className="fas fa-plus"></i></div>
              <div className="service-title fw-bold">More</div>
              <div className="service-subtitle text-muted small">View All Services</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-5 bg-light" id="testimonials">
        <div className="container">
          <h2 className="section-title text-center mb-2">What Our Customers Say</h2>
          <p className="section-subtitle text-center text-muted mb-5">Trusted by thousands of satisfied customers</p>

          <div className="row g-4">
            {testimonials.map((t) => (
              <div key={t.id} className="col-md-4">
                <div className="card p-3 border-0 shadow-sm h-100">
                  <div className="d-flex align-items-center mb-3">
                    <img className="rounded-circle me-3" src={t.img} alt={t.name} width="50" height="50" />
                    <div>
                      <div className="fw-bold">{t.name}</div>
                      <div className="text-warning small">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <i key={n} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">"{t.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;