import React from 'react';

const StepTwoDate = ({ submitOrder, handleChange, formData }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا بننادي على دالة submitOrder اللي جاية من App.js
    submitOrder(); 
  };

  return (
    <div className="form-card">
      <div className="steps-header">
        <div className="step-item step-active">
          <div className="step-circle">1</div>
          <span>Personal Information</span>
        </div>
        <div className="step-item step-active">
          <div className="step-circle">2</div>
          <span>Choose Date</span>
        </div>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{width: '100%'}}></div>
      </div>

      <h3 className="section-title">Choose Date</h3>
      <p style={{color: '#666', marginBottom: '20px', fontSize: '14px'}}>Please select a date and provide any additional details.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Execution Date</label>
          <input 
            type="date" 
            className="input-field" 
            required 
            defaultValue={formData.executionDate}
            onChange={(e) => handleChange('executionDate', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Other Details <span style={{color:'#999', fontWeight:'normal'}}>(Optional)</span></label>
          <textarea 
            className="input-field" 
            rows="5"
            placeholder="Any specific instructions or access details..."
            defaultValue={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
          ></textarea>
        </div>

        <div style={{marginBottom: '20px', fontSize:'12px', color:'#aaa', display:'flex', gap:'15px'}}>
           <span>🔒 Secure Booking</span>
           <span>🛡️ Protected Payment</span>
        </div>

        <button type="submit" className="btn btn-success">
          Submit Order <span>✔</span>
        </button>
      </form>
    </div>
  );
};

export default StepTwoDate;