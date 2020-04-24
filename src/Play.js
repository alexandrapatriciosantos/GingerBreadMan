import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
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
    obstacles,
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
          obstacles={obstacles}
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

Play.propTypes = {
  manYPos: PropTypes.number.isRequired,
  houseYPos: PropTypes.number.isRequired,
  obstacles: PropTypes.arrayOf(arrayOf(PropTypes.number.isRequired)).isRequired,
  selectedPlace: PropTypes.shape({
    pos: PropTypes.arrayOf(PropTypes.number.isRequired),
  }).isRequired,
  gridSize: PropTypes.number.isRequired,
  selectGridPlace: PropTypes.func.isRequired,
  grid: PropTypes.arrayOf(
    PropTypes.shape({
      pos: PropTypes.arrayOf(PropTypes.number.isRequired),
    }).isRequired,
  ).isRequired,
  selectGridSize: PropTypes.func.isRequired,
  userOptions: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      inOut: PropTypes.arrayOf(PropTypes.number.isRequired),
    }).isRequired,
  ).isRequired,
  clickTile: PropTypes.func.isRequired,
  newTiles: PropTypes.func.isRequired,
};


export default Play;
