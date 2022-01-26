import React from 'react';
import "../styles/Starships.css"
import { useEffect, useState } from 'react';
import axios from "axios";
import { Starship } from "../components/Starship"


export const Starships = () => {

    const [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/`)
            .then((res) => {
                setSpaceships(res.data.results);
            })
    }, []);


    return (
        <div>
            <h1>Star Wars Starships</h1>
            <div className='shipsItemContainer'>

                {
                    spaceships.map((ship, index) =>
                        <Starship key={index} nombre={ship.name} modelo={ship.model} />)
                }

            </div>
        </div>
    )
}