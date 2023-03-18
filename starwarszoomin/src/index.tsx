import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import ANewHope from "./Components/StarWarsMovies/ANewHope/ANewHope";
import TheEmpireStrikesBack from "./Components/StarWarsMovies/TheEmpireStrikesback/TheEmpireStrikesBack";
import ReturnOfTheJedi from "./Components/StarWarsMovies/ReturnOfTheJedi/ReturnOfTheJedi";
import ThePhantomMenace from "./Components/StarWarsMovies/ThePhantomMenace/ThePhantomMenace";
import AttackOfTheClones from "./Components/StarWarsMovies/AttackOfTheClones/AttackOfTheClones";
import RevengeoftheSith from "./Components/StarWarsMovies/RevengeoftheSith/RevengeoftheSith";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home contents={[]} />} />
        <Route path="/ANewHope" element={<ANewHope contents={[]} />} />
        <Route
          path="/TheEmpireStrikesBack"
          element={<TheEmpireStrikesBack contents={[]} />}
        />
        <Route
          path="/ReturnOfTheJedi"
          element={<ReturnOfTheJedi contents={[]} />}
        />
        <Route
          path="/ThePhantomMenace"
          element={<ThePhantomMenace contents={[]} />}
        />
        <Route
          path="/AttackOfTheClones"
          element={<AttackOfTheClones contents={[]} />}
        />
         <Route
          path="/RevengeoftheSith"
          element={<RevengeoftheSith contents={[]} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
