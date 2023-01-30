import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext.js';
import { signOut } from '../services/Authentication.js';

import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  // const user = { email: 'sam@gmail.com' };
  const handleLogOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <div className="header">
      <div>
        <Link to="/">TO-DO</Link>
      </div>

      {!user && (
        <div>
          <Link to="/auth/sign-in">SIGN IN</Link>
          <Link to="/auth/sign-up">SIGN UP</Link>
        </div>
      )}

      {user && (
        <div className="user">
          <div className="signedIn">SIGNED IN: {user.email}</div>
          <Link onClick={handleLogOut} to="/auth/sign-in">
            LOG OUT
          </Link>
        </div>
      )}
    </div>
  );
}
