import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

const StepThreeSuccess = () => {
  const { message, subMessage } = data.bookingSuccess;

  return (
    <div className="success-container">
      <div className="success-box">
        <div className="check-icon">✓</div>
        <h1 style={{color: '#333', fontSize: '28px', marginBottom: '10px'}}>Thank you!</h1>
        <p style={{fontSize: '20px', color: '#333', marginBottom: '10px'}}>
          {message}
        </p>
        <p style={{fontSize: '16px', color: '#666', marginBottom: '30px'}}>
          {subMessage}
        </p>
        
        <Link to="/" className="btn btn-primary" style={{margin: '0 auto', width: '200px', textDecoration: 'none'}}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default StepThreeSuccess;