import React , { useState , useEffect} from "react";
import "./Home.css";
import TableOfContents from "../TableOfContents/TableOfContents"
import StarWarsDetails from "../StarWarsDetails/StarWarsDetails";

interface PageProps {
  contents: string[];
}

const Home: React.FC<PageProps> = ({ contents }) => {


    return (
        <div>
      <div className="page">
            <TableOfContents contents={[]}/>
            <StarWarsDetails contents={[]}/>
        </div>
 

      </div>
      
      );
    };

export default Home