import React from 'react';

const StepOnePersonal = ({ nextStep, handleChange, formData }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="form-card">
      <div className="steps-header">
        <div className="step-item step-active">
          <div className="step-circle">1</div>
          <span>Personal Information</span>
        </div>
        <div className="step-item">
          <div className="step-circle">2</div>
          <span>Choose Date</span>
        </div>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{width: '50%'}}></div>
      </div>

      <h3 className="section-title">Personal Information</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name <span className="required">*</span></label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Enter your full name" 
            required 
            defaultValue={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number <span className="required">*</span></label>
          <div style={{display: 'flex', gap: '10px'}}>
            <input type="text" className="input-field" value="+20" readOnly style={{width: '70px', textAlign:'center', background:'#f9f9f9'}} />
            <input 
              type="tel" 
              className="input-field" 
              placeholder="1234567890" 
              required 
              defaultValue={formData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email <span style={{color:'#999', fontWeight:'normal'}}>(Optional)</span></label>
          <input 
            type="email" 
            className="input-field" 
            placeholder="your.email@example.com" 
            defaultValue={formData.Email}
            onChange={(e) => handleChange('Email', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Address <span className="required">*</span></label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Street address, building number, floor" 
            required
            defaultValue={formData.address}
            onChange={(e) => handleChange('address', e.target.value)}
          />
        </div>

        <div className="row">
          <div className="col form-group">
            <label>City <span className="required">*</span></label>
            <select 
              className="input-field" 
              required 
              defaultValue={formData.City}
              onChange={(e) => handleChange('City', e.target.value)}
            >
                <option value="">Select City</option>
                <option value="Cairo">Cairo</option>
                <option value="Giza">Giza</option>
            </select>
          </div>
          <div className="col form-group">
            <label>Area <span className="required">*</span></label>
            <select className="input-field" required>
                <option value="">Select Area</option>
                <option value="Maadi">Maadi</option>
                <option value="Nasr City">Nasr City</option>
            </select>
          </div>
        </div>

        <div className="checkbox-wrapper">
          <input type="checkbox" required />
          <span>I agree to the <u>terms and conditions</u> and <u>privacy policy</u></span>
        </div>

        <button type="submit" className="btn btn-primary">
          Next Step <span>→</span>
        </button>
      </form>
    </div>
  );
};

export default StepOnePersonal;