import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import HomeScreen from "./HomeScreen";
// import NavBar from "./NavBar";
// import Instructions from "./Instructions";
import Board from "./Board";

class App extends Component{

  render() {
    return (
      <>
        {/* <NavBar/> */}
        <Switch>
          {/* <Route
            exact path="/" render={() => 
              <HomeScreen/>
            }
            />
          <Route
            exact path="/instructions" render={() => 
              <Instructions/>
            }
            /> */}
          <Route
            exact path="/" render={() => 
              <Board/>
            }
            />
        </Switch>
      </> 
    );
  }

}

export default App;
