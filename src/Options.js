import React from 'react';
import PropTypes from 'prop-types';
import './Play.css';

const Options = (
  {
    userOptions,
    clickTile,
    newTiles,
  },
) => {
  const buttonStyle = (item) => (
    {
      backgroundImage: `url(${item.image})`,
    }
  );

  return (
    <div className="userOptions">
      {userOptions.map((item, i) => (
        <button
          key={i}
          type="button"
          label="option-button"
          onClick={() => clickTile(item)}
          className="play-img"
          style={buttonStyle(item)}
        />
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
};

export default Options;
