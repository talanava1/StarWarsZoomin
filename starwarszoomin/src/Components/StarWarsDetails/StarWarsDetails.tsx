import React , { useState , useEffect} from "react";
import "./StarWarsDetails.css"

interface StarWarsDetails {
    contents: string[];
  }
  

  type Film = {
    title: string;
    opening_crawl: string;
    episode_id: number;
  };

  const StarWarsDetails: React.FC<StarWarsDetails> = ({ contents }) => {


    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
      fetch('https://swapi.dev/api/films/')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setFilms(data.results))
        .catch(error => console.error('Error fetching films:', error));
    }, []);

    return (
        <div className="main">
        {films.map((film: Film) => (
          <div key={film.episode_id}>
            <h2>{film.title}</h2>
            <p>{film.opening_crawl}</p>
          </div>
        ))}
      </div>
    );
};
    
    export default StarWarsDetails