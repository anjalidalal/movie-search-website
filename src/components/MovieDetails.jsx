import React, { useEffect } from "react";

const MovieDetails = (props) => {
  useEffect(() => {
    const imdbId = props.match.params.imdbId;
    fetchMovieDetailsById(imdbId);
  });

  const fetchMovieDetailsById = (imdbId) => {
    const url = `http://www.omdbapi.com/?i=${imdbId}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => {
        console.log(result);
      })
    );
  };

  return (
    <>
      <div>HELLUUUUU</div>
    </>
  );
};

export default MovieDetails;
