import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import '../styles/StarshipProfile.css'


export const StarshipProfile = props => {
    // console.log(useParams())
    const { id } = useParams();

    const [ship, setShip] = useState({})

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/` + id)
            .then((res) => {
                setShip(res.data)
                console.log(ship)
            })
    }, []);

    return (
        <div className="containerShip">
            {/* <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="" /> */}
            <img
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} className="img-fluid" alt="Responsive image"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = `https://i.pinimg.com/originals/da/92/4b/da924b6fddec75431546f0f09002bc07.png`;
                     } }
            />
            <div className="row">
                <h3 className="text-left">{ship.name}</h3>
                <div className="col">
                    <ul>
                    <li> Model:{ship.model} </li>
                    <li> Length:{ship.length}</li>
                    <li>Consumables:{ship.consumables}</li>
                    </ul>
                  </div>
                <div className="col ">
                <ul >
                    <li > Manufacturer:{ship.manufacturer} </li>
                    <li> Crew:{ship.crew}</li>
                    <li>Cost in credits: {ship.cost_in_credits}</li>
                    </ul>
                    </div>
            </div>
           
        </div>

    )
}   