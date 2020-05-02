import React, { useState } from 'react';
import './Instructions.css';
import PropTypes from 'prop-types';
import NavBar from '../HomeScreen/NavBar';
import Difficulty from './Difficulty';
import instructions from '../content/instructions-content';


const Instructions = ({ selectGridSize }) => {
  const [index, setIndex] = useState(0);

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };
  const next = () => {
    if (index < instructions.length) {
      setIndex(index + 1);
    }
  };


  return (
    <>
      <NavBar />
      <div>
        <h1>Help Mr. Gingerbread find  his way back home in time for Christmas</h1>
        <div className={index === instructions.length - 1 ? 'none' : ''}>
          <h2>Rules</h2>
          <h2>
            {instructions[index].title}
          </h2>
          <p>
            {instructions[index].content}
          </p>
        </div>

        <div className={index === instructions.length - 1 ? '' : 'none'}>
          <Difficulty
            selectGridSize={selectGridSize}
          />
        </div>

        <div className="back-next-btn">
          <button
            type="button"
            onClick={() => back()}
            className={index === 0 ? 'hidden' : 'back'}
          >
            {' '}
            Back
          </button>
          <button
            type="button"
            className={index === instructions.length - 1 ? 'hidden' : 'next'}
            onClick={() => next()}
          >
            {' '}
            Next
            {' '}
          </button>
        </div>
      </div>
    </>
  );
};

Instructions.propTypes = {
  selectGridSize: PropTypes.func.isRequired,
};


export default Instructions;
