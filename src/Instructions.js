import React, { useState } from 'react';
import './Instructions.css';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Difficulty from './Difficulty';


const Instructions = ({ selectGridSize }) => {
  const instructions = [
    {
      title: 'Take the Gingerbread Man home',
      content: 'Use the tiles available at the bottom os your screen to build the path home.',
    },
    {
      title: 'Get new tiles',
      content: 'You can use the Random button to get a new group of tiles up to three times per game.',
    },
    {
      title: 'Take the Gingerbread Man home',
      content: 'Use the tiles available at the bottom os your screen to build the path home,',
    },
    {
      title: 'Beware of warm glasses of milk',
      content: `Even though a warm glass of milk can be conforting and  is great for your bones,
    it can be a deadly weapon when used against invertebrate, sugar-based creatures,
     such as GingerBread Man.`,
    },
  ];


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

      <div>
        <button
          type="button"
          onClick={() => back()}
          className={index === 0 ? 'none' : ''}
        >
          {' '}
          Back
        </button>
        <button
          type="button"
          className={index === instructions.length - 1 ? 'none' : ''}
          onClick={() => next()}
        >
          {' '}
          Next
          {' '}
        </button>
      </div>

    </>
  );
};

Instructions.propTypes = {
  selectGridSize: PropTypes.func.isRequired,
};


export default Instructions;
