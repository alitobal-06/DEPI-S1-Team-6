import React from "react";
import { Link } from "react-router-dom"; 
import "../assets/ServiceCategories.css"
import data from "../data/data.json";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServiceCategories() {
  return (
    <>
    <Header />
    <div className="services-wrapper">
      <h1 className="title">Service Categories</h1>
      <p className="subtitle">Select a category to manage offers and orders</p>

      <div className="services-grid">
        {data.services.map((service) => (
          <div key={service.id} className="service-card">
            
            <div className="icon-box">
              <i className={`fas ${service.icon}`}></i>
            </div>

            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>

            <Link to="/offers"> 
                <button className="manage-btn">Manage</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}