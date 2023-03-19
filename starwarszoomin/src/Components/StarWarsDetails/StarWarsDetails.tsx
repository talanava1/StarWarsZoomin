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
      //   <div className="main">
      //   {films.map((film: Film) => (
      //     <div key={film.episode_id}>
      //       <h2>{film.title}</h2>
      //       <p>{film.opening_crawl}</p>
      //     </div>
      //   ))}
        
      // </div>
      <div className="wrapper">
      <div className="scroll-text">
        <p></p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
        <h1>STAR WARS</h1>
        <p>LONG AGO, IN A GALAXY FAR, FAR</p>
        <p>AWAY</p>
        <br></br>
        <p>YOU WERE PRESENTED THIS</p> 
        <p>WEBSITE</p>
          <br></br>
       <p>THAT ALLOWED YOU TO</p>
       <p>CLICK AND SEE DETAILS</p>
       <p>OF YOUR FAVORITE STAR</p>
       <p>WARS FILMS</p>


        <br></br>
        <p>AND ALSO CHOOSE WHICH ONE</p>
        <p>IS YOUR FAVORITE</p>

        <br></br>
        <p>SEE FOR YOURSELF AND</p>
        <p>TRY IT OUT!</p>

      </div>
    </div>
    );
};
    
    export default StarWarsDetails