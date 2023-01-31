import React, { useContext, useState } from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/Authentication.js';

import './Auth.css';

export default function Auth() {
  const { type } = useParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  if (user) {
    return <Redirect to="/todos" />;
  }

  const signUp = async () => {
    const userData = await authUser(email, password, type);
    setUser(userData);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="center">
      <div className="auth">
        {type === 'sign-in' && <p className="p">Sign In</p>}
        {type === 'sign-up' && <p className="p">Sign Up</p>}

        <input
          type="text"
          value={email}
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          className="auth-input"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button className="auth-button" onClick={signUp}>
          Submit
        </button>

        {type === 'sign-in' && (
          <div className="option">
            <p className="p">Not a User? </p>
            <Link className="link" to="/auth/sign-up">
              Sign Up
            </Link>
          </div>
        )}
        {type === 'sign-up' && (
          <div className="option">
            <p className="p">Already have a account?</p>
            <Link className="link" to="/auth/sign-in">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
