import React , { useState , useEffect} from "react";
import TableOfContents from "../../TableOfContents/TableOfContents";
import "./RevengeoftheSith.css"
import revengeofthesithphoto from "./../../../../src/images/robots.jpeg"


interface RevengeoftheSithProps{
    contents: string[];
  }
  
  type Film = {
    title: string;
    opening_crawl: string;
    episode_id: number;
  };

  const RevengeoftheSith: React.FC<RevengeoftheSithProps> = ({ contents }) => {


    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
      fetch("https://swapi.dev/api/films/6/")
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const { title, opening_crawl, episode_id } = data;
          const film = { title, opening_crawl, episode_id };
          setFilms([film]);
        })
        .catch(error => console.error('Error fetching films:', error));
    }, []);
    

    return (
      <div className="page">
<div className="table-of-contents">
    <TableOfContents contents={[]}/>
</div>
        <div className="main">
        {films.map((film: Film) => (
          <div key={film.episode_id}>
            <h2>{film.title}</h2>
            <img src={revengeofthesithphoto} alt="movie-poster" />
            <p>{film.opening_crawl}</p>
          </div>
        ))}
      </div>
        </div>
    );
};
    
    export default RevengeoftheSith