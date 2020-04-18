import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="nav-bar">
    <Link
      exact
      to="/"
    >
      {' '}
Home
      {' '}
    </Link>
    <Link
      exact
      to="/instructions"
    >
      {' '}
Instructions
      {' '}
    </Link>
    <Link
      exact
      to="/play"
    >
Play see comment
      {' '}
    </Link> 
    {/* if no size value was selected, show options first ,now default 6  */}
  </div>
);

export default NavBar;
