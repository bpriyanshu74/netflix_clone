import React, { useEffect, useState } from 'react';
import axios from "../axios";
import requests from '../requests';
import "../style/Banner.css";

function Banner() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovies(request.data.results[
        Math.floor(Math.random() * request.data.results.length -1)
      ])
    }
    fetchData();    
  }, [])
  return (
    <header className="banner" style={{
      backgroundSize: "cover",
      backgroundImage : `URL("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition: "center center"
    }}>
      <div className="banner_contents">
        <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="banner_description">
          {movies?.overview}
        </h1>
      </div>
      <div className="banner_fadebottom"></div>
    </header>
  )
}

export default Banner