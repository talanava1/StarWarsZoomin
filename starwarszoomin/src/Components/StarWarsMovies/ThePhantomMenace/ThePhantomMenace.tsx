    import React , { useState , useEffect} from "react";
    import TableOfContents from "../../TableOfContents/TableOfContents";
    import phantommenacephoto from "./../../../../src/images/rsz_161lzlkzfccl_ac_sy879_.jpeg"
    import "./ThePhantomMenace.css"
    import { MovieCardComponent } from "../MovieCard";
    
    interface ThePhantomMenaceProp {
        contents: string[];
      }
      
   
      const ThePhantomMenace: React.FC<ThePhantomMenaceProp> = ({ contents }) => {
        const [loading, setIsLoading] = useState<boolean>(true);
        const [film, setFilms] = useState<any>([]);
    
        useEffect(() => {
          fetch("https://swapi.dev/api/films/4/")
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
        
        return (<MovieCardComponent title={film.title} episodeId={film.episode_id} openingCrawl={film.opening_crawl} loading={loading} imgSrc={phantommenacephoto} />
        );
    };
        
        export default ThePhantomMenace