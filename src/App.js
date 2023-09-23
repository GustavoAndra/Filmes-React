import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Movie from "./pages/movie/index";

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