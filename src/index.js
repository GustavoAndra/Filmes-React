import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from './componente/header/index'; 
import Footer from './componente/footer/index';
import App from "./App";
import SeriesComponent from "./componente/series/index"
import { ThemeProvider } from './componente/Theme/ThemeContext';
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider> {/* Envolve o App com o ThemeProvider */}
    <Header /> {/* Usando o componente Header */}
      <App />
      <SeriesComponent/>
       <Footer />
       </ThemeProvider> 
    </BrowserRouter>
  </React.StrictMode>
  
);