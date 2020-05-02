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
      Play
      {' '}
    </Link>
  </div>
);

export default NavBar;
