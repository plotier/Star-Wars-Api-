import React from 'react';
import "../styles/Starships.css"
import { useEffect, useState } from 'react';
import axios from "axios";
import { Starship } from "../components/Starship"
import InfiniteScroll from 'react-infinite-scroll-component';

export const Starships = () => {

    const [spaceships, setSpaceships] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const fetchingShips = () => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                setSpaceships(prevSpaceships => prevSpaceships.concat(res.data.results));
                // console.log(res.data)  //////////////////////////////////////////////////////////////////        
            })
    }

    const stoppingScroll = () => {
        axios
            .get(`https://swapi.dev/api/starships/?page=${page}`)
            .then((res) => {
                res.data.next == null ? setHasMore(false) : setHasMore(true)
            })
    }

    useEffect(() => {
        fetchingShips()
        stoppingScroll()
    }, [page]);

    return (
        <div>
            <InfiniteScroll
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
        </div>
    )
}