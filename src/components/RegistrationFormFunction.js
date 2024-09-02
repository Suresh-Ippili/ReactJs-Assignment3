import React, { useState } from 'react';

const RegistrationFormFunction = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', JSON.stringify(formData, null, 2));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter address"
      />
      <input
        type="tel"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        placeholder="Enter mobile number"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationFormFunction;
