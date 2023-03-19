import React , { useState , useEffect} from "react";
import TableOfContents from "../../TableOfContents/TableOfContents";
import "./ANewHope.css"
import AnewhopePhoto from "./../../../../src/images/rsz_9780571202997.jpg"

interface ANewHope {
    contents: string[];
  }
  
  type Film = {
    title: string;
    opening_crawl: string;
    episode_id: number;
  };

  const ANewHope: React.FC<ANewHope> = ({ contents }) => {


    const [films, setFilms] = useState<Film[]>([]);


    function handleButtonClick() {
      localStorage.setItem('favoriteFilm', 'A New Hope');
      console.log('favoriteFilms')
    }


    useEffect(() => {
      fetch("https://swapi.dev/api/films/1/")
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
            <img className="movieposter" src={AnewhopePhoto} alt="movie-poster"/>
            <p className="movieopeningcrawl">{film.opening_crawl}</p>
          </div>
        ))}
        <button className="selectedbtn" onClick={handleButtonClick}>Select As Favorite</button>
      </div>
        </div>
    );
};
    
    export default ANewHope