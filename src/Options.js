import React from 'react';
import PropTypes from 'prop-types';


const Options = (
  {
    userOptions,
    clickTile,
    newTiles,
  },
) => (
  <div className="userOptions">
    {userOptions.map((item, i) => (
      <button
        type="button"
        key={i}
        onClick={() => clickTile(item)}
      >
        <img
          className="play-img"
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
