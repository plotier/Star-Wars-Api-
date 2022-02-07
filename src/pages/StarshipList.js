import React from 'react';
import "../styles/StarshipList.css"
import { useEffect, useState } from 'react';
import axios from "axios";
import { Starship } from "../components/Starship"
import InfiniteScroll from 'react-infinite-scroll-component';

export const StarshipList = () => {

    const [spaceships, setSpaceships] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const fetchingShips = () => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                setSpaceships(prevSpaceships => prevSpaceships.concat(res.data.results));
            })}

    const stoppingScroll = () => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                res.data.next == null ? setHasMore(false) : setHasMore(true)
            })
    }
    const valueLogged = localStorage.getItem('logged');
    const nuevoLogged = JSON.parse(valueLogged);

    useEffect(() => {
        fetchingShips()
        stoppingScroll()
    }, [page]);

    return (
        <div>
            {
            nuevoLogged && <InfiniteScroll
                dataLength={spaceships.length}
                next={() => setPage(page => page < 4 ? page + 1 : page)}
                hasMore={hasMore}
                loader={<h4>Loading more ships...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>You load every ship available! :)</b>
                    </p>}>
                <div className='shipsItemContainer'>
                    {
                        spaceships.map((ship) =>
                            <Starship key={ship.url} nombre={ship.name} modelo={ship.model} url={ship.url} />)
                    }
                </div>
            </InfiniteScroll>
            }

            {
                !nuevoLogged && <div data-testid="starshipList-test" className='notLoggedSign'>
                    <h4>You must be logged to access the Starship Database :`(</h4>
                </div>
            }
        </div>
    )
}