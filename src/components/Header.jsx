import React from "react";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top"> 
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Khedma<span className="text-success">Now</span>
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offers">Offers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* CTA Button */}
          {/* <Link to="/booking" className="btn btn-success text-white px-4">
            Book Now
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;