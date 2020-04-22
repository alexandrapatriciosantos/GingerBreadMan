import React from 'react';
import NavBar from './NavBar';
import Board from './Board';
import Difficulty from './Difficulty';
import Options from './Options';
import './Play.css';

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
    manYPos, 
    houseYPos,
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
          manYPos={manYPos}
          houseYPos={houseYPos}
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
