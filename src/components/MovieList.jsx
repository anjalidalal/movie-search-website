import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [moviesArray, setMoviesArray] = useState([]);

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const fetchMovie = (movieName) => {
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => {
        console.log(result);
        setMoviesArray(result.Search);
      })
    );
  };
  console.log(moviesArray);
  return (
    <div className="movieContainer">
      <div className="header">
        {" "}
        <div className="searchBar" onClick={() => setIsInput(true)}>
          {isInput ? (
            <input
              type="text"
              placeholder="Search..."
              className="input"
              onChange={handleSearchMovie}
              required
              autoFocus
            />
          ) : (
            <>
              {" "}
              <SearchIcon color="disabled" />
              Search movie
            </>
          )}
        </div>
        <button
          className="searchButton"
          onClick={() => fetchMovie(searchMovie)}
        >
          Search
        </button>
      </div>
      <div className="moviesList">
        {moviesArray.map((el) => (
          <Link to={`/${el.imdbID}`} key={el.imdbID}>
            <div className="card">
              <img src={el.Poster} alt="" />
              <h1>{el.Title}</h1>
              <p>Release - {el.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
