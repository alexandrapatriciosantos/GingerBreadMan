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
      selectedPlace: { pos: [0, 0] },
      userOptions: [],
    };
  }

  componentDidMount = () => {
    this.setState({grid: this.createGrid()})
    this.setState({userOptions: this.createUserOptions()})

  }

  selectGridSize = (size) => {
    this.setState({gridSize: size}, ()=>{
      this.setState({grid: this.createGrid()})
    })
    // functional set satate, grid must be created again? use .then 
  };

  createGrid = () => {
    let grid = [];
    
    for(let i=0; i<(this.state.gridSize); i++){
        for(let j=0; j<(this.state.gridSize); j++){
            grid.push({pos:[i,j]})
        }
    }
    return grid 
  }
  createUserOptions = () => {
    let UserTiles = []
    for(let i=0; i<4; i++){
        let random = Math.floor((Math.random() * 6))
        UserTiles.push(Tiles[random])
    }
    return UserTiles
}

newTiles = () => {
  this.setState({
      userOptions: this.createUserOptions()
  })
}

  selectGridPlace = (item) => {
    this.setState({selectedPlace: item})
  }

  clickTile = (item) => {
    this.setState((state) => {
      console.log(state)
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
