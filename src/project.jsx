import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import ServiceCategories from './pages/ServiceCategories';
import OrdersPage from './pages/OrdersPage';
import Offers from './pages/Offers';
import BookingPage from './pages/BookingPage';
import ServicePage from './pages/ServicePage';
import About from './pages/about';
import Contact from './pages/contact';

// Create root
const root = ReactDom.createRoot(document.getElementById('root'));

// Main router configuration
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details/:id" element={<ServicePage />} />
        
        {/* Booking & Management */}
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/orders" element={<OrdersPage />} />
        
        {/* Info pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<ServiceCategories />} />
        
        {/* Auth */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);