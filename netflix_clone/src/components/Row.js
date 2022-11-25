import React, {useState, useEffect} from 'react';
import axios from "../axios";
import "../style/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row( {title, fetchUrl, isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    const baseImage = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        };
        fetchData();
    }, [fetchUrl]) 

    const opts = {
        width:"100%",
        height:"390",
        playerVars:{
            autoplay:1
        }
    }

    const handleClick = (movie) => {
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie?.name|| movie?.title || movie?.original_name || "").then((url) => {
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"))
            }).catch(error => console.log(error))
            // const url = "https://www.youtube.com/watch?v=deaCYFp6uX4";
            //     const urlParams = new URLSearchParams(new URL(url).search)
            //     console.log(urlParams)
            //     setTrailerUrl(urlParams.get("v"))

        }
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => {
                    return(<img 
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id} 
                    src={`${baseImage}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.title}/>)
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>    
    )
}

export default Row;