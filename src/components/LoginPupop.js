import React, { useEffect } from 'react';
import '../styles/LoginPupop.css'
import { useState } from 'react';

export const LoginPupop = props => {

  const valueUserSaved = localStorage.getItem('userSaved');
  const nuevoUsuarioSaved = JSON.parse(valueUserSaved);
  const usersArray = nuevoUsuarioSaved


  const [login, setLogin] = useState({})
  const [logged, setLogged] = useState(false)
  const handlerLoginInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }


  const found = () => {
    const user = usersArray.find(element => element.email === login.email && element.password === login.password)
    user ? setLogged(true) : setLogged(false)
    user && alert(`Bienvenido, ${user.firstName}`)

  }
useEffect(()=>{
  localStorage.setItem('logged', JSON.stringify(logged))  
},[logged])



  return (
    props.trigger ?
      <div className='wholePupop'>
        <div className='loginModal '>
          <div onClick={props.closingFunction} className='cerrarLoginCruz' />
          <div className='publiDisney'></div>
          <h3 className="signInTitle">SIGN IN</h3>
          <input onChange={e => handlerLoginInput(e)} name="email" type="text" placeholder='Email Address' className=" form-control" />
          <input onChange={e => handlerLoginInput(e)} name="password" type="password" placeholder='Password' className=" form-control" />
          <button onClick={found} className="btn btn-secondary signInButton">Sign In</button>
        </div>

      </div>
      :
      "")
}




