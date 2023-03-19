import React , { useState , useEffect} from "react";
import TableOfContents from "../../TableOfContents/TableOfContents";
import "./TheEmpireStrikesBack.css"
import empirestrikesbackphoto from "./../../../../src/images/empirestrikesback.jpg"
import { MovieCardComponent } from "../MovieCard";

interface TheEmpireStrikesBackProp {
    contents: string[];
  }
  
  type Film = {
    title: string;
    opening_crawl: string;
    episode_id: number;
  };

  const TheEmpireStrikesBack: React.FC<TheEmpireStrikesBackProp> = ({ contents }) => {
    const [loading, setIsLoading] = useState<boolean>(true);
    const [film, setFilms] = useState<any>([]);

    useEffect(() => {
      fetch("https://swapi.dev/api/films/2/")
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const { title, opening_crawl, episode_id } = data;
          const film = { title, opening_crawl, episode_id };
          setFilms(film);
        })
        .catch(error => console.error('Error fetching films:', error))
        .finally(() => {
          setIsLoading(false);
        })
    }, []);
    
    return (<MovieCardComponent title={film.title} episodeId={film.episode_id} openingCrawl={film.opening_crawl} loading={loading} imgSrc={empirestrikesbackphoto} />
    );
};
    
    export default TheEmpireStrikesBack