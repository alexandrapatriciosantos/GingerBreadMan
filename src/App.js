import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Instructions from './Instructions';
import Play from './Play';
import Tiles from './Tiles';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridSize: "", 
      grid: [],
      selectedPlace: { pos :  [0, 0] },
      userOptions: [],
      manYPos: 0,
      houseYPos: 0,
      obstacles: [],
    };
  }

componentDidMount = () => {
  this.setState({grid: this.createGrid()}) // TRY TO REMOVE THIS LATER
  this.setState({userOptions: this.createUserOptions()})
}

randomPos = () => {
  const length = this.state.gridSize - 1;
  return Math.floor((Math.random() * length));
}; // generates a random number within gridSize length

obstacles = () => {
  const quantity = this.state.gridSize/3  
  const obstacles = []
  for( let i=0; i<quantity; i++){
    const x = this.randomPos()
    const y = this.randomPos()

    console.log('obstacles', obstacles, 'x', x, 'y', y);
    // if() // dont repeat numbers for x || y
    // if() // y !== this.state.manYPos 
    // if() // y !== this.state.houseYPos 
    // if() // dont repeat numbers for x || y
    obstacles.push([x, y]);
  }
  return obstacles
}

selectGridSize = (size) => {
  this.setState({gridSize: size}, ()=>{
    this.setState({
      grid: this.createGrid(),
      manYPos: this.randomPos(),
      houseYPos: this.randomPos(),
      obstacles: this.obstacles(),
    }, () =>{
      this.setState({
        selectedPlace: { pos: [this.state.manYPos, 0]}
      })
    });
  });
}; //takes difficulty selected, sets as state .then sets state for grid, man and house positions .then sets adjusts selectedPlace to match man position 
  
createGrid = () => {
  let grid = [];
  
  for(let i=0; i<(this.state.gridSize); i++){
    for(let j=0; j<(this.state.gridSize); j++){
      grid.push({pos:[i,j]})
      }
  }
  return grid 
} // creates original array of arrays containing two coordinates.

createUserOptions = () => {
    let UserTiles = []
    for(let i=0; i<4; i++){
        let random = Math.floor((Math.random() * 6))
        UserTiles.push(Tiles[random])
    }
    return UserTiles
}; // selects four random tiles to be displayed at the bottom div.

newTiles = () => {
  this.setState({
      userOptions: this.createUserOptions()
  })
}; // comands new random options to be generated and sets them as state.

selectGridPlace = (item) => {
  this.setState({selectedPlace: item})
} // takes last clicked place and sets it as state.

clickTile = (item) => {
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
    userOptions: updatedUserOptions
  }
})
}


render() {
  return (
    <>
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
            clickTile={this.clickTile}
            selectGridPlace={this.selectGridPlace}
            selectedPlace={this.state.selectedPlace}
            userOptions={this.state.userOptions}
            newTiles={this.newTiles}
            manYPos={this.state.manYPos}
            houseYPos={this.state.houseYPos}
            obstacles={this.state.obstacles}
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
    </>
  );
}
}

export default App;
