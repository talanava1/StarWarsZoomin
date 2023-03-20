import React, { useState, useEffect } from "react";
import "./ANewHope.css";
import AnewhopePhoto from "./../../../../src/images/rsz_9780571202997.jpg";
import { MovieCardComponent } from "../MovieCard";

interface ANewHope {
  contents: string[];
}

const ANewHope: React.FC<ANewHope> = () => {
  const [film, setFilm] = useState<any>({});
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/1/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const { title, opening_crawl, episode_id } = data;
        const film = { title, opening_crawl, episode_id };
        setFilm(film);
      })
      .catch((error) => console.error("Error fetching films:", error))
      .finally(() => {
        setIsLoading(false)
      })
  }, []);

  return (<MovieCardComponent title={film.title} episodeId={film.episode_id} openingCrawl={film.opening_crawl} loading={loading} imgSrc={AnewhopePhoto} />
  );
};



export default ANewHope;
