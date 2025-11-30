import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import "../assets/services.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

function Services() {
  // Show services from index 7 onwards (after Home page services)
  const services = data.services.slice(7);

  return (
    <>
      <Header />

      {/* Page hero */}
      <section className="page-hero py-5">
        <div className="container text-center">
          <h1 className="page-title">Our Services</h1>
          <p className="page-sub">
            Choose from a wide range of home and professional services
          </p>
        </div>
      </section>

      {/* Services grid */}
      <main className="container py-5">
        <div className="services-grid">
          {services.map((service) => (
            <Link 
              to={`/service-details/${service.id}`} 
              className="card service-card h-100 text-decoration-none text-dark" 
              key={service.id}
            >
              <img className="service-img" src={service.image} alt={service.name} />
              <div className="card-body">
                <h3 className="service-title">{service.name}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Services;
