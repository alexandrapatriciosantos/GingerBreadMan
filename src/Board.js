import React from 'react';
import PropTypes from 'prop-types';


const Board = (
  {
    selectGridPlace, grid, gridSize, selectedPlace, manYPos, houseYPos,
  },
) => {
  const onSelectGridPlace = (item) => {
    selectGridPlace(item);
  };

  const displayPlaceImage = (item) => {
    const start = [manYPos, 0];
    const finish = [houseYPos, gridSize - 1];


    if (start[0] === item.pos[0] && start[1] === item.pos[1]) {
      return {
        url: 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031153/ginger_grass-floor-png_rfa4be.png',
        hoverStyle: 'none',
      };
    } // starting place


    if (finish[0] === item.pos[0] && finish[1] === item.pos[1]) {
      return {
        url: 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031306/gingerhouse_grass-floor-png_dplulx.png',
        hoverStyle: 'none',
      };
    } // finishing place

    if ((item.pos[0] === 2 && item.pos[1] === 1) || (item.pos[0] === 4 && item.pos[1] === 3)) {
      return {
        url: 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575036424/milk_square_avlbz8.png',
        hoverStyle: 'none',
      }; // milk glass obstacles
    } // they can still be replaced? how to block this?

    if (item.played) {
      return {
        url: item.played.image,
      };
    } // already played

    if (item.pos === selectedPlace.pos) { // currently selected
      return {
        url: 'https://www.yarwoodleather.com/wp-content/uploads/2016/12/Aneurin-Yellow-01.jpg',
      };
    }

    if (
      (selectedPlace.pos[0] + 1 === item.pos[0] && selectedPlace.pos[1] === item.pos[1])
      || (selectedPlace.pos[1] + 1 === item.pos[1] && selectedPlace.pos[0] === item.pos[0])
      || (selectedPlace.pos[0] - 1 === item.pos[0] && selectedPlace.pos[1] === item.pos[1])
      || (selectedPlace.pos[1] - 1 === item.pos[1] && selectedPlace.pos[0] === item.pos[0])
    ) {
      return {
        url: 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575028835/grass-floor-png_yrrjos.png',
      };
    } // adjacent to currently selected

    return {
      url: 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575030693/snowsquare_gg7gls.png',
    };
    // inactive, not yet played tile
  };

  const buttonStyle = (item) => {
    return {
      backgroundImage: `url(${displayPlaceImage(item).url})`,
      height: `${800 / gridSize}px`,
      width: `${800 / gridSize}px`,
      margin: 0,
      padding: 0,
      borderStyle: `${displayPlaceImage(item).hoverStyle}`,
    };
  };

  return (
    <>
      <div className="board">
        {
        grid.map((item, i) => (
          <button
            type="button"
            key={i}
            style={buttonStyle(item)}
            onClick={() => { onSelectGridPlace(item); }}
            label="tile"
            className="single-tile-btn"
          />
        ))
}
      </div>
    </>
  );
};

// Board.propTypes = {
//   selectGridPlace: PropTypes.func.isRequired,
//   grid: PropTypes.arrayOf(
//     PropTypes.shape({
//       pos: PropTypes.array().isRequired,
//     }).isRequired,
//   ).isRequired,
//   gridSize: PropTypes.number.isRequired,
//   selectedPlace: PropTypes.shape({
//     pos: PropTypes.array(PropTypes.number.isRequired),
//   }).isRequired,
// };

// AdminDocList.propTypes = {
//     documentation: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     ).isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onDocEdit: PropTypes.func.isRequired,
//   };

export default Board;
