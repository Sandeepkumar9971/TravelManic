import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

const LoginPage = (props) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const [error, setError] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simulated authentication - replace this with your actual authentication logic
      const correctEmail = props.data.email==null?'test@gmail.com':props.data.email;
      const correctPassword = props.data.password;
  
      if (loginData.email === correctEmail && loginData.password === correctPassword) {
        // Login successful
        sessionStorage.setItem("Email",loginData.email)
        sessionStorage.setItem("Pass",loginData.password)
        window.location.reload();
        console.log('Login successful')
        setError('');
        // Perform actions like redirecting to another page or setting login state to true
      } else {
        // Login failed
        setError('Invalid email or password. Please try again.');
      }
    };
  

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button><br/>
        <h6 style={{cursor: 'pointer'}} onClick={()=>props.onclose()}>Register Form</h6>
      </form>
    </div>
  );
};

export default LoginPage;
