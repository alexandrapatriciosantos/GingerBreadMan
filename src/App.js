import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen/HomeScreen';
import Instructions from './Instructions/Instructions';
import Play from './Play/Play';
import Tiles from './content/Tiles';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: "", 
      grid: [],
      obstacles: [],
      manYPos: 0,
      houseYPos: 0,
      userOptions: [],
      selectedPlace: { pos :  [0, 0] },
      prevPlayed: {}, // contains prev selectedPlace
      nearbyTiles: [], 
    };
  }

componentDidMount = () => {
  this.setState({userOptions: this.createUserOptions()})
}

// HELPER FUNCTIONS
createGrid = () => {
  let grid = [];
  
  for(let i=0; i<(this.state.gridSize); i++){
    for(let j=0; j<(this.state.gridSize); j++){
      grid.push({pos:[i,j]})
      }
  }
  return grid 
} // creates original array of arrays containing two coordinates.

randomPos = () => {
  const length = this.state.gridSize - 1;
  return Math.floor((Math.random() * length));
}; // generates a random number within gridSize.length


//BOARD ELEMENTS
obstacles = () => {
  const totalQuantity = this.state.gridSize/3  
  const obstacles = []

  const checkRepetition = (pos) => {
    if(obstacles === []){ // array is still empty
      return false
    } 
    for(let i = 0; i<obstacles.length; i++){
      for(let j = 0; j<2; j++){
        if(pos === obstacles[i][j])
        return true
      }
    }
    return false
  }

    while (obstacles.length < totalQuantity) {
      const x = this.randomPos()
      const y = this.randomPos()
      if(
        (y !== this.state.manYPos && y !== this.state.houseYPos) // never in first and last columns 
        && (checkRepetition(x) === false && checkRepetition(y) === false) // new obctacles will never have the x or y position of a previously defined obstacle
      ){
        obstacles.push([x, y]);
      }
    }
  return obstacles
} // generates obstacles location, never in the first and last column or overlaping with other obstacles   

selectGridSize = (size) => {
  this.setState({gridSize: size}, ()=>{
    this.setState({
      grid: this.createGrid(),
      // manYPos: this.randomPos(), 
      manYPos: 0, 
      // houseYPos: this.randomPos(),
      houseYPos: 0,
      obstacles: this.obstacles(),
    }, () =>{
      this.setState({
        selectedPlace: { pos: [this.state.manYPos, 0]}
      }, () => {
        this.setState({nearbyTiles: this.nearbyTiles()}) // ##this function will be replaced with playable tiles##
      })
    });
  });
}; //takes difficulty selected, sets as state .then sets state for grid, man and house positions .then sets selectedPlace to match man position 


// USER OPTIONS
createUserOptions = () => {
  let UserTiles = []
  for(let i=0; i<4; i++){
      let random = Math.floor((Math.random() * 6))
      UserTiles.push(Tiles[random])
  }
  return UserTiles
}; // selects four random tiles to be displayed at the bottom div.

onNewTiles = () => {
  this.setState({
      userOptions: this.createUserOptions()
  })
}; // new random options are generated and set as state. 

// FUNCTIONALITY 

selectGridPlace = (item) => {
  for(let i=0; i<this.state.nearbyTiles.length; i++){
    if(this.state.nearbyTiles[i][0] === item.pos[0] 
    && this.state.nearbyTiles[i][1] === item.pos[1]){
      this.setState((prevState)=>{
        return{
          prevPlayed: prevState.selectedPlace,
          selectedPlace: item
        }
      })
    }
  }
} // takes last clicked place and sets selectedPlace as state. TURN YELLOW 

playTile = (item) => {

  this.setState((state) => {
    const updatedGrid = state.grid.map((grid) => {
        if(grid.pos === state.selectedPlace.pos) {
          grid.played = item
        }

        return grid;
      });

    const updatedUserOptions = state.userOptions.map(option => {
            if(item.inOut === option.inOut){
                let random = Math.floor((Math.random() * 6))
                return option = (Tiles[random])
            }
            return option;
    });

  return {
    ...state,
    grid: updatedGrid,
    userOptions: updatedUserOptions,
    nearbyTiles: this.nearbyTiles(),
  }
})
} // play one of the tiles at the bottom to currently selected place 

nearbyTiles = () => {

  const up = [this.state.selectedPlace.pos[0] - 1, this.state.selectedPlace.pos[1]]; // 1 
  const right = [this.state.selectedPlace.pos[0], this.state.selectedPlace.pos[1] + 1]; // 2
  const down = [this.state.selectedPlace.pos[0] + 1, this.state.selectedPlace.pos[1]]; // 3
  // PLAYABLE inOut: [1,2], [1,3], ([1,4])
  const left = [this.state.selectedPlace.pos[0], this.state.selectedPlace.pos[1] - 1]; // 4
  
  const nearbyTiles = [];
  nearbyTiles.push(right, left, down, up);

  // if(this.state.selectedPlace.played){
  //   console.log('yo',this.state.selectedPlace.played.inOut)
  //   //if inOut[1,4], check direction pointed to prev played, next direction 
  // }
  return nearbyTiles;
} //defines wich tiles can be played next

playableTiles = () => {
  const prevTile = this.state.lastPlayed // still needs to be defined. 
  const toBePlacedTile = this.state.selectedPlace

  console.log('toBePlacedTile', toBePlacedTile)

}

render() {
  console.log('selectedPlace', this.state.selectedPlace)
  console.log('prevPlayed', this.state.prevPlayed)
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomeScreen />}
        />
        <Route
          exact
          path="/play"
          render={() => <Play 
            gridSize={this.state.gridSize}
            grid={this.state.grid}
            selectGridSize={this.selectGridSize}
            updateGrid={this.updateGrid}
            playTile={this.playTile}
            selectGridPlace={this.selectGridPlace}
            selectedPlace={this.state.selectedPlace}
            userOptions={this.state.userOptions}
            newTiles={this.onNewTiles}
            manYPos={this.state.manYPos}
            houseYPos={this.state.houseYPos}
            obstacles={this.state.obstacles}
            nearbyTiles={this.state.nearbyTiles}
          />}
        />
        <Route
          exact
          path="/instructions"
          render={() => <Instructions 
            selectGridSize={this.selectGridSize}
          />}
        />
      </Switch>
      </div>
  );
}
}

export default App;
