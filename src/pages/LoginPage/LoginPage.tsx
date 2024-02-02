import React, { useState, useEffect } from 'react';
import './Login.css';
import { useAuth } from '../../context/AuthContext';
import { Helmet } from 'react-helmet';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const context = useAuth();

  useEffect(() => {
    if (context?.authenticatedUser) {
      setName(context.authenticatedUser.name);
      setAge(context.authenticatedUser.age.toString());
      setEmail(context.authenticatedUser.email);
    }
  }, [context?.authenticatedUser]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && email && age) {
      context?.login({ name, age: +age, email });
      window.location.pathname = '/user';
    }
  };

  return (
    <div className="login">
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <h2 className="login__title">Login</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <label>
          <span>Name:</span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Age:</span>
          <input
            required
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button disabled={!!context?.authenticatedUser} type="submit">
          LOGIN
        </button>
      </form>

      {context?.authenticatedUser && (
        <div>
          <p>
            You are already registered,{' '}
            <a href="http://localhost:3000/user">go to your profile</a>
          </p>
        </div>
      )}
    </div>
  );
};
