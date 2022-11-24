import React, {useState, useEffect} from 'react';
import axios from "../axios";
import "../style/Row.css";

function Row( {title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([]);

    const baseImage = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        };
        fetchData();
    }, [fetchUrl]) 
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => {
                    return(<img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id} 
                    src={`${baseImage}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title}/>)
                })}
            </div>
            
        </div>   
        
        
        
    )
}

export default Row;