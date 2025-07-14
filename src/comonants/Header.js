/** @format */
import { useState, useEffect,useRef } from "react";
import axios from "axios";
import Movie from "./Movie";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Header = (props) => {
  const [moviesApi, setMoviesApi] = useState("");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=" + moviesApi + "&apikey=ac6fd678")
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search.map((i) => ({ ...i, AddedToWhatchList: false, AddedToWhatched: false })));
        } else {
          setMovies([]);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        setMovies([]);
      });
  }, [moviesApi]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleApi = (e) => {
    setMoviesApi(e.target.value);
  };
  return (
    <>
      <div className="header">
        <input
          placeholder="    search your movie "
          value={moviesApi}
          onChange={handleApi}
          ref={inputRef} 
        />
        <Link className="Link" to="/">Whatch List</Link> 
      </div>
      <Movie movies={movies} AddMovie={props.AddMovie} />
    </>
  );
};

export default Header;
