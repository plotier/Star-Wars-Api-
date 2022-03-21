import React, { useEffect, useState } from 'react';

export const Films = props => {
    const [filmUrlArray, setFilmUrlArray] = useState(props.url)
    const [artificialId, setArtificialId] = useState([])

    useEffect(() =>
        filmUrlArray.map(item => {
            let manipulado = item.replace("https://swapi.dev/api/films/", " ").replace("/", "")
            let manipuladoAInteger = parseInt(manipulado)
            setArtificialId(artificialId => [...artificialId, manipuladoAInteger])
        }
        ),[])

    return (
        <div className='container d-flex justify-content-center'>
            {
                artificialId.map((item, index) =>
                    < div key={index} className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/films/${item}.jpg`} alt="Card image cap" />
                    </div>)
            }
        </div>
    )
}


