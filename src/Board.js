import React, { Component } from "react";
import './Board.css';


const TILES = [
    {

        inOut: [1,2],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/12_ywecq2.png",
    },
    {

        inOut: [1,3],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/13_xs1t4u.png",
    },
    {

        inOut: [1,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/14_q88ao5.png",    
    },
    {

        inOut: [2,3],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/23_g55p2d.png",
    },
    {

        inOut: [2,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/24_icr5v1.png",
    },
    {

        inOut: [3,4],

        image : "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575033530/34_bo2t1a.png",
    },
]

const GRID_SIZE = 6; 

export default class Board extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            grid: [], 
            gridSize: GRID_SIZE,
            userOptions: [], 
            selectedPlace: {pos:[0,0]},
        };
      }

    componentDidMount = () => {
        
        this.setState({grid: this.createGrid()})

        this.setState({userOptions: this.createUserOptions()})
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

    createUserOptions = () => {
        let UserTiles = []
        for(let i=0; i<4; i++){
            let random = Math.floor((Math.random() * 6))
            UserTiles.push(TILES[random])
        }
        return UserTiles
    }

    selectGridPlace = (item) => {
        this.setState({selectedPlace: item})
    }

    clickTile = (item) => {

        this.setState((state) => {

            const updatedGrid = state.grid.map((grid) => {
                if(grid.pos === state.selectedPlace.pos) {
                  grid.played = item
                }
            
                return grid;
              })

            const updatedUserOptions = state.userOptions.map(option => {
                    if(item.inOut === option.inOut){
                        let random = Math.floor((Math.random() * 6))
                        return option = (TILES[random])
                    }
                    return option; 
            })

            return {
            ...state,
            grid: updatedGrid,
            userOptions: updatedUserOptions
            }
          })
    }
    
    displayPlaceImage = (item) => {
        if(item.pos[0] === 0 && item.pos[1] === 0){
            return "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031153/ginger_grass-floor-png_rfa4be.png"
        }
        else if(item.pos[0]=== GRID_SIZE-1 && item.pos[1] === GRID_SIZE-1){
            return "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575031306/gingerhouse_grass-floor-png_dplulx.png"
        }else if((item.pos[0]=== 2 && item.pos[1] === 1) || (item.pos[0]=== 4 && item.pos[1] === 3)){
            return "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575036424/milk_square_avlbz8.png"
        }
        else if(item.played){
            return item.played.image  
        }else if(item === this.state.selectedPlace){
            return"https://www.yarwoodleather.com/wp-content/uploads/2016/12/Aneurin-Yellow-01.jpg"
        }else if(
            (this.state.selectedPlace.pos[0]+1 === item.pos[0] && this.state.selectedPlace.pos[1] ===  item.pos[1]) ||
            (this.state.selectedPlace.pos[1]+1 === item.pos[1] && this.state.selectedPlace.pos[0] ===  item.pos[0]) ||

            (this.state.selectedPlace.pos[0]-1 === item.pos[0] && this.state.selectedPlace.pos[1] ===  item.pos[1]) ||
            (this.state.selectedPlace.pos[1]-1 === item.pos[1] && this.state.selectedPlace.pos[0] ===  item.pos[0])
        ){
        return "https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575028835/grass-floor-png_yrrjos.png"
        } else {
            return 'https://res.cloudinary.com/ddoc8nfxb/image/upload/v1575030693/snowsquare_gg7gls.png'
        } 
    } 

    newTiles = () => {
        this.setState({
            userOptions: this.createUserOptions()
        })
    }


    render() {

        return (
            <div className="container">
                <div className="board">
                    {this.state.grid.map((item) => {
                        return(
                            <div 
                                className="boardPlace"
                                key={item.pos} 
                                style={{width: `${100/this.state.gridSize}%`, height: `${100/this.state.gridSize}%` }}
                                onClick={()=>{this.selectGridPlace(item)}}
                            >
                                <img 
                                    src={this.displayPlaceImage(item)} 
                                    alt="played"
                                />
                            </div>
                        ) 
                    })}
                </div> 

                <div className="userOptions">
                    {this.state.userOptions.map((item, i) => {
                        return(
                            <div
                                className="playImg" 
                                key={i}
                                onClick={() => this.clickTile(item)}
                            >
                                <img 
                                    src={item.image} 
                                    alt="path"
                                />
                            </div>
                        ) 
                    })}
                    <button
                        onClick={this.newTiles}
                    > Random </button>
                </div>
            </div>
        );
    }
}
