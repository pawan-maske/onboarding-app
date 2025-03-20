import { useState } from 'react';
import { submitEcuData } from '../api/api.js';

const EcuOnboardingForm = () => {
  const [formData, setFormData] = useState({
    ecuId: '',
    vehicleId: '',
    firmwareVersion: '',
    manufacturer: '',
    installationDate: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitEcuData(formData);
      alert('ECU data submitted successfully!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert('Error submitting ECU data');
    }
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>ECU Onboarding</h2>
      <div className="form-group">
        <label>ECU ID:</label>
        <input type="text" required 
          onChange={(e) => setFormData({...formData, ecuId: e.target.value.trim()})} />
      </div>
      <div className='form-group'>
        <label>Vehicle ID:</label>
        <input type="text" required
          onChange={(e)=> {
            console.log("e.target.value",e.target.value.replace(/\s+/g, ''))
            return setFormData({...formData, vehicleId: e.target.value})
          }}/>
      </div>
      
      {/* Add other fields similarly */}
      <button type="submit">Submit</button>
    </form>
  );
};
export default EcuOnboardingForm;