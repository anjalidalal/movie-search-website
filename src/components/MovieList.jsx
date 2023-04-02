import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState();
  const [moviesArray, setMoviesArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const fetchMovie = (movieName) => {
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?s=${movieName}&apikey=f512a0ba`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setMoviesArray(result.Search);
        setIsLoading(false);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error.Error);
      });
  };
  console.log(error);
  return (
    <div className="movieContainer">
      <div className="header">
        {" "}
        <TextField
          id="outlined-basic"
          label="Search movie..."
          size="small"
          onChange={handleSearchMovie}
          variant="outlined"
          fullWidth
        />
        <Button
          className="searchButton"
          variant="contained"
          onClick={() => fetchMovie(searchMovie)}
        >
          {" "}
          <SearchIcon fontSize="small" />
          Search
        </Button>
      </div>
      <p>Results for {searchMovie}</p>
      {isLoading ? (
        <div>
          <CircularProgress />
          Loading...
        </div>
      ) : (
        <div className="moviesList">
          {moviesArray?.map((el) => (
            <Link to={`/${el.imdbID}`} key={el.imdbID}>
              <div className="card">
                <img src={el.Poster} className="poster" alt="" />
                <h1 className="title">{el.Title}</h1>
                <p className="releaseYear">Release - {el.Year}</p>
              </div>
            </Link>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default MovieList;
