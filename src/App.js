import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componente/home/index";
import Movie from "./componente/movie/index";
import SeriesComponent from "./componente/series/index";
import Proposta from "./componente/proposta/index";

const Main = () => (
  <div>
    <Home />
    <SeriesComponent />
    <Proposta />
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;