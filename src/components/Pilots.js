import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Pilots = (props) => {

    const [pilotData, setPilotData] = useState({})

    const fetchingPilots = () => {
        axios
            .get(props.url)
            .then(res => {
                setPilotData({
                    pilotData,
                    name: res.data.name,
                    hair:res.data.hair_color,
                    birthday:res.data.birth_year
                })
            })
    }


    useEffect(() => {
        fetchingPilots()
        console.log(props.url)
    }, [])

    let manipulado = props.url.replace("https://swapi.dev/api/people/", " ").replace("/", "")
    const idArtificial = parseInt(manipulado)

    return (
    
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${idArtificial}.jpg`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{pilotData.name}</h5>
                    <p className="card-text">Birthday: {pilotData.birthday}</p>
                    <p className="card-text">Hair: {pilotData.hair}</p>
                </div>
        </div>
    )
}

{/*
-Array con la url de los pilotos en StarshipProfile
-Hacemos un map del array que pinte el componente Pilots, pasando con el link como prop
-Dentro del componente Pilots, llamamos con axios a la API, usando el link recibido por props
-Le ponemos los datos dinámicos a la Card
*/}