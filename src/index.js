import React from "react";
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "react-router-dom";
import Footer from './componente/footer/index';
import App from "./App";
import "./global.css";

const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);