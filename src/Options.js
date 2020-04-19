import React from 'react';
import PropTypes from 'prop-types';
import './Play.css';

const Options = (
  {
    userOptions,
    clickTile,
    newTiles,
  },
) => (
  <div className="userOptions">
    {userOptions.map((item) => (
      <button
        type="button"
        onClick={() => clickTile(item)}
        className="play-img"
      >
        <img
          src={item.image}
          alt="path"
        />
      </button>
    ))}
    <button
      type="button"
      onClick={newTiles}
      className="peppermint-btn"
    >
      {' '}
      Random
    </button>
  </div>
);

export default Options;
