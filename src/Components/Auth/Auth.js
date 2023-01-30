import React, { useContext, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/Authentication.js';

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
    <div className="auth">
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

      <label>Password</label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>

      <button onClick={signUp}>Submit</button>
    </div>
  );
}
