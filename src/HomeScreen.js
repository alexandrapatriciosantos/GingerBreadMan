import React from 'react';
import './HomeScreen.css';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
  <>
    <div className="home-container">
      <h1> Lost Gingerbread Man</h1>
      <img src="https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574936615/282749fe507ccbc57c839738ac599620_yzw70n.png" alt="GingerBreadMan" />
      <Link to="/instructions">
        <button
          type="button"
          className="peppermint-btn"
        >
          {' '}
          Start
        </button>
      </Link>
    </div>
  </>
);

export default HomeScreen;
