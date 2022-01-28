import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export const StarshipProfile = props =>{
    // console.log(useParams())
    const {id} = useParams();

    const[ship, setShip]=useState({})

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/`+ id)
            .then((res) => {                 
                setShip(res.data)
                console.log(ship)
            })
    }, []);

    return(
        <h3>{ship.name}-{ship.model}</h3>
    )
}   