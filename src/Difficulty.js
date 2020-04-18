import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Difficulty = ({ selectGridSize }) => {
  const selectDifficulty = (d) => (
    selectGridSize(d)
  );

  return (
    <>
      <h2>Select the level of difficulty</h2>
      <div className="difficulty">
        <Link exact to="/play">
          <button
            type="button"
            className="chocolat-btn"
            onClick={() => selectDifficulty(6)}
          >
            {' '}
Easy
          </button>
        </Link>
        <Link exact to="/play">
          <button
            type="button"
            className="chocolat-btn"
            onClick={() => selectDifficulty(12)}
          >
            {' '}
Medium
          </button>
        </Link>
        <Link exact to="/play">
          <button
            type="button"
            className="chocolat-btn"
            onClick={() => selectDifficulty(18)}
          >
            {' '}
Hard
          </button>
        </Link>
      </div>
    </>
  );
};

Difficulty.propTypes = {
  selectGridSize: PropTypes.func.isRequired,
};

export default Difficulty;
