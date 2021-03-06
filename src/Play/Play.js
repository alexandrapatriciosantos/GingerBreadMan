import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import NavBar from '../HomeScreen/NavBar';
import Board from './Board';
import Difficulty from '../Instructions/Difficulty';
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
    playTile,
    newTiles,
    manYPos,
    houseYPos,
    obstacles,
    nearbyTiles,
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
          nearbyTiles={nearbyTiles}
        />
        <Options
          userOptions={userOptions}
          playTile={playTile}
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
  playTile: PropTypes.func.isRequired,
  newTiles: PropTypes.func.isRequired,
};


export default Play;
