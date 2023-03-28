import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  const params = useParams();
  useEffect(() => {
    const imdbId = params.imdbId;
    fetchMovieDetailsById(imdbId);
  });

  const fetchMovieDetailsById = (imdbId) => {
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => {
        console.log(result);
      })
    );
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default MovieDetails;
