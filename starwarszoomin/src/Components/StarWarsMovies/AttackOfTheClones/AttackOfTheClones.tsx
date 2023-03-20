import React , { useState , useEffect} from "react";
import TableOfContents from "../../TableOfContents/TableOfContents";
import "./AttackOfTheClones.css"
import attackoftheclonesphoto from "./../../../../src/images/attackoftheclones.jpg"
  import { MovieCardComponent } from "../MovieCard";
    
    interface AttackOfTheClonesProps {
        contents: string[];
      }
      
    
      const AttackOfTheClones: React.FC<AttackOfTheClonesProps> = ({ contents }) => {
        const [loading, setIsLoading] = useState<boolean>(true);
        const [film, setFilms] = useState<any>([]);
    
        useEffect(() => {
          fetch("https://swapi.dev/api/films/5/")
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
        
        return (<MovieCardComponent title={film.title} episodeId={film.episode_id} openingCrawl={film.opening_crawl} loading={loading} imgSrc={attackoftheclonesphoto} />
        );
    };
        
        export default AttackOfTheClones