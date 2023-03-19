import React from "react";
import "./TableOfContents.css";
import ANewHope from "../StarWarsMovies/ANewHope/ANewHope";
import { Link, useLocation } from "react-router-dom";

interface TableOfContentsProps {
  contents: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contents }) => {
  const location = useLocation();

  return (
    <div className="table-of-contents">
      <Link className={`flex ${location.pathname === "/" ? "active" : ""}`} to="/">
        Home
      </Link>

      <Link className={`flex ${location.pathname === "/ANewHope" ? "active" : ""}`} to="/ANewHope">
        A New Hope
      </Link>

      <Link className={`flex ${location.pathname === "/TheEmpireStrikesBack" ? "active" : ""}`} to="/TheEmpireStrikesBack">
        The Empire Strikes Back
      </Link>

      <Link className={`flex ${location.pathname === "/ReturnOfTheJedi" ? "active" : ""}`} to="/ReturnOfTheJedi">
        Return Of The Jedi
      </Link>

      <Link className={`flex ${location.pathname === "/ThePhantomMenace" ? "active" : ""}`} to="/ThePhantomMenace">
        The Phantom Menace
      </Link>

      <Link className={`flex ${location.pathname === "/AttackOfTheClones" ? "active" : ""}`} to="/AttackOfTheClones">
        Attack Of The Clones
      </Link>

      <Link className={`flex ${location.pathname === "/RevengeoftheSith" ? "active" : ""}`} to="/RevengeoftheSith">
        Revenge of the Sith
      </Link>
    </div>
  );
};

export default TableOfContents;
