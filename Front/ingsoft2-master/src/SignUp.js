// src/components/SignUp.js
import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/api/registrar/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        password: password,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        console.log('Usuario registrado:', data);
      }
    })
    .catch((error) => {
      setErrorMessage('Error al registrar el usuario.');
      console.error('Error:', error);
    });
};


  return (
    <div className="signup-container">
      <div className="left-side">
        <h1 className="title">TaskFlow</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="name">Nombre y Apellido</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Regístrate</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
      <div className="right-side">
        <img src="/img3SU.png" alt="Ilustración de registro" className="signup-image" />
      </div>
    </div>
  );
}

export default SignUp;
