import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  useEffect(() => {
    const imdbId = params.imdbId;
    fetchMovieDetailsById(imdbId);
  }, []);

  const fetchMovieDetailsById = (imdbId) => {
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => {
        // console.log(result);
        setMovieDetail(result);
      })
    );
  };
  console.log(movieDetail);
  return (
    <div className="movieDetails">
      <button className="back" onClick={handleNavigation}>
        <ArrowBackIcon fontSize="large" />
      </button>
      <div>
        <img src={movieDetail.Poster} alt="" />
        <div>
          <h1>{movieDetail.Title}</h1>
          <p>
            <span>{movieDetail.Year} | </span>
            <span>{movieDetail.Runtime}</span> |{" "}
            <span>{movieDetail.Language}</span>
          </p>
          <p>
            RATING : <span>{movieDetail.imdbRating}</span>
          </p>
          <p>
            GENRE : <span>{movieDetail.Genre}</span>
          </p>
          <p>
            RELEASED : <span>{movieDetail.Released}</span>
          </p>
          <p>
            DIRECTOR : <span>{movieDetail.Director}</span>
          </p>
          <p>
            ACTORS : <span>{movieDetail.Actors}</span>
          </p>
          <p>
            WRITER : <span>{movieDetail.Writer}</span>
          </p>
          <p>
            PLOT : <span>{movieDetail.Plot}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
