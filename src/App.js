import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componente/home/index";
import Movie from "./componente/movie/index";
import Proposta from "./componente/proposta/index";
import Favorites from './componente/favoritos/index';
import Header from './componente/header/index';

const Main = () => (
  <div>
    <Header /> 
    <Home />
    <Proposta/>
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/favoritos" element={<Favorites />}/>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Movie/>} />
      </Routes>
    </div>
  );
};

export default App;