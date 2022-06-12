import React, { useEffect } from "react";
import requests from "../utils/requests";
import { useState } from "react";
import axios from "../utils/axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="object-contain h-screen"
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
    }}>
        
      <div className="py-20 px-4">
        <h1 className="text-white text-3xl py-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buutons py-4">
          <button className="bg-gray-800 text-white px-4 mr-2 hover:bg-white hover:text-black">Play</button>
          <button className="bg-gray-800 text-white px-4 hover:bg-white hover:text-black">My List</button>
        </div>
        <h1 className="text-gray-200">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
