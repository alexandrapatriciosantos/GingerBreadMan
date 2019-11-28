import React, { Component } from "react";
import './Board.css';


const TILES = [
    {

        inOut: [1,2],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/12_agw2i1.png",
    },
    {

        inOut: [1,3],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/13_zbrit8.png",
    },
    {

        inOut: [1,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/14_mau2uu.png",    
    },
    {

        inOut: [2,3],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/23_kaubjk.png",
    },
    {

        inOut: [2,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/24_gz6wi9.png",
    },
    {

        inOut: [3,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574957905/34_pnrdqd.png",
    },
]

const GRID_SIZE = 2; 

export default class Board extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            grid: [], 
            gridSize: GRID_SIZE,
            userOptions: TILES, 
            selectedPlace: {pos:[0,0]},
            // destinyPlace:{pos:[0,1]}, 
        };
      }

    componentDidMount = () => {
        this.setState(
            {grid: this.createGrid()}, 
        )
    }

    createGrid = () => {
        let grid = [];
        
        for(let i=0; i<(GRID_SIZE); i++){
            for(let j=0; j<(GRID_SIZE); j++){
                grid.push({pos:[i,j]})
            }
        }
        return grid 
    }

    selectGridPlace = (item) => {
        this.setState({selectedPlace: item})
    }

    isSelected = () => {
        if(this.state.selectedPlace){
            return "highlightClass"
        }
    }

    clickTile = (item) => {

        this.setState((state) => {


            const updatedGrid = state.grid.map((grid) => {
                if(grid.pos === state.selectedPlace.pos) {
                  grid.played = item
                //   let adjacent = [grid.pos[0]+1, grid.pos[1]+1]
                //   console.log(adjacent, grid.pos[0]+1)
                }
                return grid;
              })

            return {
            ...state,
            grid: updatedGrid
            }
          })
    }



    render() {

        return (
            <div className="container">
                <div className="game">
                <div className="gingerLeft">
                    <img 
                        src="https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574936615/282749fe507ccbc57c839738ac599620_yzw70n.png" 
                        alt="GingerBreadMan"
                    />
                </div>
                <div className="board">
                    {this.state.grid.map((item) => {
                        return(
                            <div 
                                key={item.pos} 
                                style={{width: `${100/this.state.gridSize}%`, height: `${100/this.state.gridSize}%` }}
                                onClick={()=>{this.selectGridPlace(item)}}
                            >
                                <img 
                                    src={item.played ? item.played.image : 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574955874/istockphoto-480629555-612x612_k0lblw.jpg'} 
                                    alt="played"
                                />
                            </div>
                        ) 
                    })}
                </div> 
                <div className="gingerRight">
                    <img 
                        src="https://res.cloudinary.com/ddoc8nfxb/image/upload/v1574936615/fliped_kissclipart-gingerbread-house-clipart-gingerbread-house-christ-1e7764fe2ef77f40_okqcoe.png" 
                        alt="GingerBreadHouse"
                    />
                </div>
            </div>

                <div className="userOptions">
                    {this.state.userOptions.map((item) => {
                        return(
                            <div
                                className="playedImg" 
                                key={item.inOut}
                                onClick={() => this.clickTile(item)}
                            >
                                {item.inOut}
                                <img src={item.image} alt="path"/>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        );
    }
}
