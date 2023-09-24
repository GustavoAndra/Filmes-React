import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from './componente/header/index'; 
import Footer from './componente/footer/index';
import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <App />
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);