import React from 'react';
import './Board.css';
import NavBar from './NavBar';
import Board from './Board';
import Difficulty from './Difficulty';
import Options from './Options';

const Play = (
  {
    gridSize,
    selectGridSize,
    selectGridPlace,
    selectedPlace,
    grid,
    userOptions,
    clickTile,
    newTiles,
  },
) => {
  const display = () => {
    if (gridSize === '') {
      return <Difficulty selectGridSize={selectGridSize} />;
    }
    return (
      <>
        <Board
          selectGridPlace={selectGridPlace}
          selectedPlace={selectedPlace}
          grid={grid}
          gridSize={gridSize}
        />
        <Options
          userOptions={userOptions}
          clickTile={clickTile}
          newTiles={newTiles}
        />
      </>
    );
  };
  return (
    <>
      <NavBar />
      {display()}
    </>
  );
};
export default Play;
