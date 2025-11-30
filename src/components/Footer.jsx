import React from "react";
import { Link } from "react-router-dom"; 

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5" id="contact">
      <div className="container">
        <div className="row g-4">
          {/* Brand section */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-brand fs-3 fw-bold mb-3">
              Khedma<span className="text-success">Now</span>
            </div>
            <p className="text-white-50">
              Your trusted platform for finding reliable service professionals in your area.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a className="text-white" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="text-white" href="#"><i className="fab fa-twitter"></i></a>
              <a className="text-white" href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Pages links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Pages</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link className="text-white-50 text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white-50 text-decoration-none" to="/services">Services</Link></li>
              <li><Link className="text-white-50 text-decoration-none" to="/booking">Booking</Link></li>
              <li><Link className="text-white-50 text-decoration-none" to="/offers">Offers</Link></li>
            </ul>
          </div>

          {/* Company links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link className="text-white-50 text-decoration-none" to="/about">About Us</Link></li>
              <li><Link className="text-white-50 text-decoration-none" to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          {/* Support links */}
          <div className="col-6 col-lg-2">
            <h6 className="text-white fw-bold mb-3">Support</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a className="text-white-50 text-decoration-none" href="#">Privacy Policy</a></li>
              <li><a className="text-white-50 text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="text-center text-white-50">
          © 2025 KhedmaNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;