import React from "react";
import { Route, Routes } from "react-router";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route path="/:imdbId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default Routing;
