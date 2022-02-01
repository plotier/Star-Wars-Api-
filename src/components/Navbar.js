import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'
import logo from '../img/logo.svg'
import { Link } from "react-router-dom";
import { LoginPupop } from "./LoginPupop";
import { SignUp } from "./SignUp";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const [openedLogin, setOpenedLogin] = useState(false)
    const [openedSignup, setOpenedSignup] = useState(false)
    const openLoginModal = () => {
        setOpenedLogin(openedLogin => !openedLogin)
    }
    const openSignupModal = () => {
        setOpenedSignup(openedSignup => !openedSignup)
    }

    const valueLogged = localStorage.getItem('logged');
    const nuevoLogged = JSON.parse(valueLogged);




 

let navigate = useNavigate();
const handleLogOut=()=>{
    
localStorage.setItem('logged', JSON.stringify(false))
return navigate("/");
}





    return (
        <div>
            <LoginPupop trigger={openedLogin} closingFunction={openLoginModal} />
            <SignUp trigger={openedSignup} closingFunction={openSignupModal} />
            <div className="backgroundNavbar d-flex">
                <div className="navbarCraft" >
                    <img className="logoPic" src={logo} alt="" />
                </div>

                {!nuevoLogged && <div className="signing">
                    <span className="loginOpenModal" onClick={openLoginModal}>LOG IN  /</span>
                    <span className="signupOpenModal" onClick={openSignupModal}>/  SIGN UP</span>
                </div>}
                {nuevoLogged && <div className="signing">
                    <h5 className="m-2">You ´re logged in the Dark Side</h5>
                    <span className="signupOpenModal" onClick={handleLogOut}>LogOut</span>
                </div>}
            </div>
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