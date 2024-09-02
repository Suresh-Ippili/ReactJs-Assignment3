import React from 'react';
import NumberFormClass from './components/NumberFormClass';
import NumberFormFunction from './components/NumberFormFunction';
import NumberFormUncontrolled from './components/NumberFormUncontrolled';
import RegistrationFormClass from './components/RegistrationFormClass';
import RegistrationFormFunction from './components/RegistrationFormFunction';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>Number Form (Class Component)</h1>
      <NumberFormClass />
      <h1>Number Form (Function Component)</h1>
      <NumberFormFunction />
      <h1>Number Form (Uncontrolled Component)</h1>
      <NumberFormUncontrolled />
      <h1>Registration Form (Class Component)</h1>
      <RegistrationFormClass />
      <h1>Registration Form (Function Component)</h1>
      <RegistrationFormFunction />
      <h1>Login</h1>
      <Login />
    </div>
  );
}

export default App;
