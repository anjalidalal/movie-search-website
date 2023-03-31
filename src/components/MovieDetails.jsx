import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=f512a0ba`;
    fetch(url).then((response) =>
      response.json().then((result) => {
        setMovieDetail(result);
        setIsLoading(false);
      })
    );
  };
  console.log(movieDetail);
  return (
    <div className="movieDetails">
      <button className="back" onClick={handleNavigation}>
        <ArrowBackIcon fontSize="large" />
      </button>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <div>
          <img src={movieDetail.Poster} className="moviePoster" alt="" />
          <div className="details">
            <h1 className="movieName">{movieDetail.Title}</h1>
            <div className="tag">
              <span>{movieDetail.Year} | </span>
              <span>{movieDetail.Runtime}</span> |{" "}
              <span>{movieDetail.Language}</span>
            </div>
            <p>
              <span>RATING : </span>
              {movieDetail.imdbRating}
            </p>
            <p>
              <span>GENRE : </span>
              {movieDetail.Genre}
            </p>
            <p>
              <span>RELEASED : </span>
              {movieDetail.Released}
            </p>
            <p>
              <span>DIRECTOR : </span>
              {movieDetail.Director}
            </p>
            <p>
              <span> ACTORS : </span>
              {movieDetail.Actors}
            </p>
            <p>
              <span> WRITER : </span>
              {movieDetail.Writer}
            </p>
            <p>
              <span>PLOT : </span>
              {movieDetail.Plot}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
