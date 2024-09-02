import React, { useRef, useState } from 'react';
import Welcome from './Welcome'; // Ensure this path is correct based on your file structure

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = () => {
    setLoginData({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
    setShowWelcome(true);
  }

  return (
    <div>
      {!showWelcome ? (
        <div>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter email"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <Welcome loginData={loginData} />
      )}
    </div>
  );
}

export default Login;
