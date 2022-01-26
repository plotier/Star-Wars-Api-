import React from 'react';
import"../styles/Starships.css"

export const Starship= (props)=> {
  return (
 <ul className='shipItem'>
     <li>{props.nombre}</li>
     <li>{props.modelo}</li>
    </ul>
  );
}

