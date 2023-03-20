import { useEffect, useState } from "react";
import TableOfContents from "../TableOfContents/TableOfContents";
import heart from "../../../src/images/heart.svg"

export interface MovieCardProps {
    title: string;
    openingCrawl: string;
    episodeId: number;
    handleButtonClick?: (title: string) => void;
    loading: boolean;
    imgSrc?: string;
  }
  
export const MovieCardComponent = ({title, episodeId, openingCrawl, loading, imgSrc }: MovieCardProps) => {
 const [favoriteFilms, setFavoriteFilms] = useState<string[]>([]); 
 const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleButtonClick = (filmTitle: any) => {
    let updatedArray = [...favoriteFilms]; 
    if (!updatedArray.includes(filmTitle)) {
        updatedArray = [...favoriteFilms, filmTitle];
        setFavoriteFilms(updatedArray); 
        setIsLiked(true);
    } else {
        updatedArray = favoriteFilms.filter((item) => item !== title)
        setFavoriteFilms(updatedArray);
        setIsLiked(false);
    }
    const updatedArrayString = JSON.stringify(updatedArray);
    localStorage.setItem("LikedFilms", updatedArrayString); 
  }

  useEffect(() => {
    const storedFavoriteFilms = JSON.parse(localStorage.getItem("LikedFilms") || "[]");
    if(storedFavoriteFilms.includes(title)) {
        setIsLiked(true);
    }
    setFavoriteFilms(storedFavoriteFilms);
  }, [favoriteFilms,isLiked])

    return (
      <div className="page">
        <div className="table-of-contents">
          <TableOfContents contents={[]} />
        </div>
  
        <div className="main">
          {loading ? <div className="loading-spinner">LOADING...</div> : (
          <div key={episodeId}>
            <h2 className="movietitle">{title}</h2>
            <img className="movieposter" src={imgSrc} alt="movie-poster" />
            <p className="movieopeningcrawl">{openingCrawl}</p>
            <button
              className="selectedbtn"
              onClick={() => handleButtonClick(title)}
            >
             {isLiked ? 'Remove from Favorites' : 'Select As Favorite' }
            </button>
            <div className="likedsign">{isLiked && <img className="heartsvg" src={heart}/>}</div>
          </div>)}
        </div>
      </div>
    );
  }