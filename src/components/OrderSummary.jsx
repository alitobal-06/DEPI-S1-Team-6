import React from 'react';

const OrderSummary = () => {
  return (
    <div className="summary-card">
      <h2>Your Order Summary</h2>
      
      <div className="service-item">
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Service" className="service-img" />
        <div>
          <div style={{fontWeight: 'bold', fontSize: '15px'}}>Business Consulting</div>
          <div style={{fontSize: '13px', color: '#777'}}>Premium Package</div>
        </div>
      </div>

      <div className="price-row">
        <span>Service Price</span>
        <span>$299.00</span>
      </div>
      <div className="price-row">
        <span>Tax (10%)</span>
        <span>$29.90</span>
      </div>

      <div className="total-row">
        <span>Total Amount</span>
        <span>$328.90</span>
      </div>

      <div className="info-note">
        <span>📅</span> 
        Your booking will be confirmed within 24 hours after submission.
      </div>
    </div>
  );
};

export default OrderSummary;