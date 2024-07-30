import ReactDOM from "react-dom/client";
import React from 'react';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom';

import App from "./App.jsx";
import "./style.css";

ReactGA.initialize('G-52QTSCXE05');

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<BrowserRouter>
    <App />
  </BrowserRouter>);

// ReactDOM.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('root')
//   );