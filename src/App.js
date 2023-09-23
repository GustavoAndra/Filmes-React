import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./componente/home/index";
import Movie from "./componente/movie/index";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/:id" exact element={<Movie />} />
            </Routes>
        </div>
    );
};

export default App;