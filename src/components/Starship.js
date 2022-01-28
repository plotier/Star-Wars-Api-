import React from 'react';
import "../styles/Starships.css"
import { Link } from 'react-router-dom';
export const Starship = (props) => {

  let string = props.url
  let manipulado = string.replace("https://swapi.dev/api/starships/", " ").replace("/", "")
  const idArtificial = parseInt(manipulado)
  // console.log(idArtificial)

  return (

<div className='shipItem'>
    <Link to={"/starships/"+idArtificial} className='shipItemLink' >
      <div>
      <ul >
        <li>{props.nombre}</li>
        <li>{props.modelo}</li>
      </ul>
      </div>
    </Link>
    </div>
  );
}

