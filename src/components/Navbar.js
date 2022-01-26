import React from "react";
import '../styles/Navbar.css'
import logo from '../img/logo.svg'



export const Navbar = () => {

    return (
        <div>
            <div className="navbar" ><img className="logoPic" src={logo} alt="" /></div>
            <div className="navigationNavbar"></div>
        </div>
    )
}