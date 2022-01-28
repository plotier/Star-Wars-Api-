import React from 'react';
import "../styles/Starships.css"
import { useEffect, useState } from 'react';
import axios from "axios";
import { Starship } from "../components/Starship"
import {Link} from "react-router-dom"


export const Starships = () => {

    const [spaceships, setSpaceships] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/`)
            .then((res) => {
                setSpaceships(res.data.results);   
                // console.log(res.data)          
            })
    }, []);



    return (
        <div>
            <div className='shipsItemContainer'>

                {
                    spaceships.map((ship, index) =>
                        <Starship key={ship.url} nombre={ship.name} modelo={ship.model} url={ship.url}/>)
                }

            </div>
        </div>
    )
}