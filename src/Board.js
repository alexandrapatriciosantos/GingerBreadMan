import React from 'react';
import PropTypes from 'prop-types';


const Board = (
  {
    selectGridPlace, grid, gridSize, selectedPlace,
  },
) => {
  const onSelectGridPlace = (item) => {
    selectGridPlace(item);
  };

  const displayPlaceImage = (item) => {
    if (item.pos[0] === 0 && item.pos[1] === 0) {
      return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031153/ginger_grass-floor-png_rfa4be.png'; // starting place
    }
    if (item.pos[0] === gridSize - 1 && item.pos[1] === gridSize - 1) {
      return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031306/gingerhouse_grass-floor-png_dplulx.png'; // finishing place
    } if ((item.pos[0] === 2 && item.pos[1] === 1) || (item.pos[0] === 4 && item.pos[1] === 3)) {
      return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575036424/milk_square_avlbz8.png'; // milk glass obstacles
      // they can still be replaced? how to block this?
    }
    if (item.played) {
      return item.played.image; // already played
    } if (item === selectedPlace) { // currently selected
      return 'https://www.yarwoodleather.com/wp-content/uploads/2016/12/Aneurin-Yellow-01.jpg';
    } if (
      (selectedPlace.pos[0] + 1 === item.pos[0] && selectedPlace.pos[1] === item.pos[1])
            || (selectedPlace.pos[1] + 1 === item.pos[1] && selectedPlace.pos[0] === item.pos[0])

            || (selectedPlace.pos[0] - 1 === item.pos[0] && selectedPlace.pos[1] === item.pos[1])
            || (selectedPlace.pos[1] - 1 === item.pos[1] && selectedPlace.pos[0] === item.pos[0])
    ) { // adjacent to currently selected
      return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575028835/grass-floor-png_yrrjos.png';
    }
    return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575030693/snowsquare_gg7gls.png'; // inactive, not yet played tile
  };

  const buttonStyle = (item) => {
    return {

      backgroundImage: `url(${displayPlaceImage(item)})`,
      width: `${100 / gridSize}px`,
      height: `${100 / gridSize}px`,
      backgroundColor: '#00FF00',
      margin: 0,
      padding: 0,
    };
  };
  return (
    <>
      <div className="board">
        {
          grid.map((item) => (
            //   <div
            //     key={i}
            //     className="single-tile"
            // </div>
            //   >
            <button
              type="button"
              key={item.pos}
              style={buttonStyle(item)}
              onClick={() => { onSelectGridPlace(item); }}
              label="bla"
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
