import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from './pages/header/index'; 
import Footer from './pages/footer/index';
import App from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header /> {/* Usando o componente Header */}
      <App />
       <Footer />
    </BrowserRouter>
  </React.StrictMode>
  
);
