import React from 'react';
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

  return (
    <>
      <NavBar />
      <div>
        <h1>Help Mr. Gingerbread find  his way back home in time for Christmas</h1>
      </div>
      <div>
        <h2>Rules</h2>
        {instructions.map((i) => (
          <>
            <h2>
              {i.title}
            </h2>
            <p>
              {i.content}
            </p>
          </>
        ))}
      </div>
      <Difficulty selectGridSize={selectGridSize} />
    </>
  );
};

Instructions.propTypes = {
  selectGridSize: PropTypes.func.isRequired,
};


export default Instructions;
