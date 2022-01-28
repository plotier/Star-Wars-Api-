import React from "react";
import '../styles/Navbar.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";



export const Navbar = () => {

    return (
        <div>
            <div className="navbarCraft" ><img className="logoPic" src={logo} alt="" /></div>
            <div className="navigationNavbar">
                <Link className="shipItemLink" to={"/"}>
                <div className="navTabs">Home</div>
                </Link>
                <Link className="shipItemLink" to={"/starships/"}>
                <div className="navTabs2">Starships</div>
                </Link>
            </div>
        </div>
    )
}