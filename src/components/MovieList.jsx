import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
//import CircularProgress from "@mui/material/CircularProgress";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState();
  const [moviesArray, setMoviesArray] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let name = localStorage.getItem("movie");
    if (name) {
      fetchMovies(name);
    }
  }, []);

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const fetchMovies = (movieName) => {
    const url = `https://www.omdbapi.com/?s=${movieName}&apikey=f512a0ba`;
    localStorage.setItem("movie", movieName);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.Error) {
          setMoviesArray([]);
          setError(true);
        } else {
          setMoviesArray(result.Search);
          setError(false);
        }
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
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
          onClick={() => fetchMovies(searchMovie)}
        >
          {" "}
          <SearchIcon fontSize="small" />
          Search
        </Button>
      </div>
      <p>Results for {searchMovie}</p>

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
      {error ? (
        <h1 className="errorMsg">
          Movie Not Found <SentimentVeryDissatisfiedIcon fontSize="large" />{" "}
        </h1>
      ) : null}
    </div>
  );
};

export default MovieList;
