import React, { useState, useEffect } from 'react';
import '../styles/LoginPupop.css'
export const SignUp = props => {

    const emailPattern = new RegExp(/^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/);
    //emailPattern .test(eMail.value) == false || eMail.value.length < 3

    const [datosUsuario, setDatosUsuario] = useState({})
    

    const handleUserInput = e => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        }
        )
    }

    const [usuariosGuardados, setUsuariosGuardados] = useState([])
    const savingUser = () => {

        setUsuariosGuardados([...usuariosGuardados,
        datosUsuario
        ])
        localStorage.setItem('user', JSON.stringify(datosUsuario))
        
    }
    useEffect(()=>{
        if(usuariosGuardados.length>0){
        localStorage.setItem('userSaved', JSON.stringify(usuariosGuardados))}
    },[usuariosGuardados])

    return (
        props.trigger ?
            <div className='wholePupop'>

                <form  id="signUpModal" className='loginModal'>
                    <div onClick={props.closingFunction} className='cerrarLoginCruz' />
                    <div className='publiDisney'></div>
                    <h3 className="signInTitle">Create your account</h3>
                    <input onChange={e => handleUserInput(e)} type="text" name='firstName' placeholder='First Name' className=" form-control" />
                    <input onChange={e => handleUserInput(e)} type="text" name='lastName' placeholder='Last Name' className=" form-control" />
                    <input onChange={e => handleUserInput(e)} type="text" name='email' placeholder='Email Address' className=" form-control" />
                    <input onChange={e => handleUserInput(e)} type="password" name='password' placeholder='Password' className=" form-control" />
                    <button onClick= {savingUser}  type="button" className="btn btn-secondary signInButton">Sign up</button>
                </form>

            </div>
            :
            "")
}
