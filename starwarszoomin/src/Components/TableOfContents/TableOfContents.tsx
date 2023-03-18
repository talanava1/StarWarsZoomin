import React from "react";
import "./TableOfContents.css";
import ANewHope from "../StarWarsMovies/ANewHope/ANewHope";
import { Link } from "react-router-dom";

interface TableOfContentsProps {
  contents: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contents }) => {
  return (
    <div className="table-of-contents">
      <Link className="flex" to="/">
        Home
      </Link>

      <Link className="flex" to="/ANewHope">
        A New Hope
      </Link>
      <Link className="flex" to="/TheEmpireStrikesBack">
        The Empire Strikes Back
      </Link>
      <Link className="flex" to="/ReturnOfTheJedi">
        Return Of The Jedi
      </Link>
      <Link className="flex" to="/ThePhantomMenace">
        The Phantom Menace
      </Link>
      <Link className="flex" to="/AttackOfTheClones">
        Attack Of The Clones
      </Link>
      <Link className="flex" to="/RevengeoftheSith">
        Revenge of the Sith
      </Link>
    </div>
  );
};

export default TableOfContents;
