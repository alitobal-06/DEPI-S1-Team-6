import React, { useState } from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../assets/Booking.css';
import OrderSummary from '../components/OrderSummary';
import StepOnePersonal from '../components/StepOnePersonal';
import StepTwoDate from '../components/StepTwoDate';
import StepThreeSuccess from '../components/StepThreeSuccess';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    id: 1,            
    offerId: 101,     
    fullName: '',
    phoneNumber: '',  
    Email: '',        
    address: '',
    City: '',         
    executionDate: '',
    notes: ''         
  });

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleChange = (input, value) => {
    setFormData(prev => ({ ...prev, [input]: value }));
  };

  // Submit order - logs data and shows success page
  const submitOrder = () => {
    const orderedData = {
      id: formData.id,
      offerId: formData.offerId,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      Email: formData.Email,
      address: formData.address,
      City: formData.City,
      notes: formData.notes,
      executionDate: formData.executionDate
    };
    
    console.log("🚀 Booking Data (JSON):", JSON.stringify(orderedData, null, 2));

    setTimeout(() => {
      setStep(3);
      window.scrollTo(0, 0);
    }, 1000); 
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      id: 1, offerId: 101, fullName: '', phoneNumber: '', 
      Email: '', address: '', City: '', executionDate: '', notes: ''
    });
  };

  return (
    <>
      <Header />
      
      <div style={{ paddingTop: '20px', minHeight: '80vh' }}>
        {step === 3 ? (
          <StepThreeSuccess resetForm={resetForm} />
        ) : (
          <div className="main-container">
            <OrderSummary />
            
            {step === 1 && (
              <StepOnePersonal 
                nextStep={nextStep} 
                handleChange={handleChange} 
                formData={formData} 
              />
            )}
            
            {step === 2 && (
              <StepTwoDate 
                submitOrder={submitOrder} 
                handleChange={handleChange} 
                formData={formData} 
              />
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;