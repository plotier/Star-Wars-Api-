import React from "react";
import '../styles/Navbar.css'
import logo from '../img/logo.svg'



export const Navbar = () => {

    return (
        <div>
            <div className="navbarCraft" ><img className="logoPic" src={logo} alt="" /></div>
            <div className="navigationNavbar">
                <div className="navTabs">Home</div>
                <div className="navTabs">Starships</div>
            </div>
        </div>
    )
}