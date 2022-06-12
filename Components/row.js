import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import YouTube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="text-white text-xl">
     <h2>{title}</h2>

      <div className="flex overflow-y-auto overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <img
          className="object-contain w-full max-h-40 mr-4 hover:scale-150 p-2"
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id}/>
        ))}
      </div>
    </div>
  );
}

export default Row;
