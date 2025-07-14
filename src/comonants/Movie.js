/** @format */
// eslint-disable-next-line no-unused-vars
import { useState, useReducer } from "react";
import "../App.css";
/*function reducer(state, action) {
  switch (action.type) {
    case "AddToWhatchList":
      state = [...state, action.payload];
          return state.map((movie) => {
        return  { ...movie, AddedToWhatchList: true };
      });
    case "AddToWhatchedMovies":
      state = [...state, action.payload];
      return state.map((movie) => {
        return [...state, { ...movie, AddedToWhatched: true }];
      });
      case "RemoveFromWhatchList":
      return state.filter((movie) => movie.imdbID !== action.id);
    case "RemoveFromWhatchedMovies":
      return state.map((movie) => movie.imdbID !== action.id);
    default:
      return state;
  }
}*/

export const Movie = (props) => {
  return (
    <div className="movies_cart">
      {props.movies.length > 0 &&
        props.movies.map((item) => {
          return (
            <div className="movie" key={item.imdbID}>
              <div className="img_container">
                <img src={item.Poster} alt={item.Title} />
              </div>
              <div>{item.Title}</div>
                  <button  onClick={()=>props.AddMovie(item)}>Add</button>
            </div>
          );
        })}
    </div>
  );
};
export default Movie;
