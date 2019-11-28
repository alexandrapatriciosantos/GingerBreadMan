import React from "react";
import  { NavLink } from "react-router-dom"
import './NavBar.css';

const NavBar = () => {

    return(
        <div className="bar">
            <NavLink 
                exact to="/"
            > Home </NavLink>
            <NavLink 
                exact to="/instructions"
            > Instructions </NavLink>
            <NavLink 
                exact to="/board"
            >Board </NavLink>
        </div>
    );
}

export default NavBar; 