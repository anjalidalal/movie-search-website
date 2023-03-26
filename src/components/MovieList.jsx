import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState("");
  useEffect(() => {}, []);

  const handleSearchMovie = (e) => {
    setSearchMovie(e.target.value);
  };

  const fetchMovie = (movieName) => {
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => console.log(result))
    );
  };
  return (
    <div>
      <div className="header">
        {" "}
        <div className="searchBar">
          <SearchIcon color="disabled" />
          Search movie
        </div>
        {/* <input type="text" onChange={handleSearchMovie} /> */}
        <button
          className="searchButton"
          onClick={() => fetchMovie(searchMovie)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default MovieList;
