import React from 'react';

const Welcome = ({ loginData }) => {
  return (
    <div>
      <h2>Welcome!</h2>
      <div>Email: {loginData.email}</div>
      <div>Password: {loginData.password}</div>
    </div>
  );
}

export default Welcome;
