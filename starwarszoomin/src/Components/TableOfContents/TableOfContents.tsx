import React from "react";
import "./TableOfContents.css"
import ANewHope from "../StarWarsMovies/ANewHope/ANewHope";
import { Link } from "react-router-dom";


interface TableOfContentsProps {
    contents: string[];
  }
  
  const TableOfContents: React.FC<TableOfContentsProps> = ({ contents }) => {
    return (
      <div className="table-of-contents">
        
            <Link className="flex" to="/ANewHope">A New Hope</Link>
            <a className="flex">Hey</a>
            <a className="flex">Hey</a>
            <a className="flex">Hey</a>

        
      </div>
    );
};
    
    export default TableOfContents