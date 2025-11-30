import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OfferList from "../components/OfferList";
import RelatedItem from "../components/RelatedItem";
import "../assets/ServicePage.css";
import data from "../data/data.json";

function ServicePage() {
  const { id } = useParams();
  const service = data.services.find((s) => s.id === parseInt(id));

  // Handle service not found
  if (!service) {
    return (
      <>
        <Header />
        <div className="container py-5 text-center" style={{minHeight: '60vh', alignContent: 'center'}}>
          <h2>Service Not Found</h2>
          <Link to="/services" className="btn btn-primary mt-3">Back to Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="service-page">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          <Link to="/" style={{textDecoration:'none', color: '#666'}}>Home</Link> › 
          <Link to="/services" style={{textDecoration:'none', color: '#666'}}> Services</Link> › 
          <span> {service.name}</span>
        </p>
        
        <h1 className="service-title">{service.name} Services</h1>

        <div className="service-layout">
          {/* Main content */}
          <div className="service-left">
            <img src={service.image} className="main-img" alt={service.name} />

            <div className="service-card">
              <div className="service-header">
                <h2>About {service.name}</h2>
              </div>

              <p className="service-desc">
                {service.description}. We provide professional providers verified by KhedmaNow.
                Choose one of our offers below or book a general consultation.
              </p>

              {/* Available offers */}
              <h3 className="mt-4 mb-3" style={{color: '#198754'}}>Available Offers</h3>
              <OfferList offers={service.offers} />

              {/* General booking option */}
              <div className="mt-4 text-center">
                <p>Don't see what you need?</p>
                <Link to="/booking">
                  <button className="book-btn">Book General Service</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar - Related services */}
          <div className="service-right">
            <div className="related-box">
              <h3>Other Services</h3>

              <div className="related">
                {data.services
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map((item) => (
                    <Link to={`/service-details/${item.id}`} key={item.id} style={{textDecoration: 'none', color: 'inherit'}}>
                      <RelatedItem 
                        title={item.name}
                        shortDesc={item.description}
                        price="From 100"
                        unit="EGP"
                        img={item.image}
                      />
                    </Link>
                  ))}
              </div>

              {/* Special offer card */}
              <div className="offer-card-side">
                <h3>Special Offer</h3>
                <p>Book 3 services and get 15% off your total!</p>
                <Link to="/booking">
                  <button className="learn-btn">Get Offer</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;