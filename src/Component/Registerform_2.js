import React from 'react';
import './RegistrationForm.css'; 
import { useState } from 'react';

const RegistrationForm_2 = (props) => {
    const [registrationData, setData] = useState({
        fullname: '',
        contact: '',
        dateofbirth:'',
        email:'',
        password:'',
        gender:''

      });
// console.log(registrationData)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to server, validation, etc.)
    // For demonstration purposes, you can add your logic here
    console.log('Form submitted');
    props.onshow(registrationData)
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="input-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="contact">Contact:</label>
          <input type="tel" id="contact" name="contact" onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="dateofbirth">Date of Birth:</label>
          <input type="date" id="dateofbirth" name="dateofbirth" onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={handleInputChange} required />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" onChange={handleInputChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm_2;
