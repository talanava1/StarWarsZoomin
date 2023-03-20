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
        <p>LONG AGO, IN A GALAXY FAR, FAR AWAY,</p>
        <br></br>
        <p>THIS WEBSITE WAS CREATED</p> 
          <br></br>
       <p>THAT ALLOWED YOU TO CLICK AND SEE</p>
       <p>DETAILS OF YOUR FAVORITE STAR</p>
       <p>WARS FILMS</p>


        <br></br>
        <p>AND ALSO CHOOSE WHICH ONE</p>
        <p>IS YOUR FAVORITE.</p>

        <br></br>
        <p>SEE FOR YOURSELF AND</p>
        <p>TRY IT OUT!</p>

      </div>
    </div>
    );
};
    
    export default StarWarsDetails