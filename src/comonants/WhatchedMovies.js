/** @format */

// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import HeaderBar from "./HeaderBar";
import "../App.css";

const WhatchedMovies = (props) => {
  const [render, setRender] = useState(false);
  return (
    <>
      <HeaderBar />
      {props.WhatchList.length > 1 ? (
        <div className="movies_cart">
          {props.WhatchList.map((item) => {
            return (
              item.AddedToWhatched && (
                <div className="movie" key={item.imdbID}>
                  <div className="img_container">
                    <img src={item.Poster} alt={item.Title} />
                  </div>
                  <div>{item.Title}</div>
                  <button
                    onClick={() => {
                      props.RemoveFromWhatchedMovies(item);
                      setRender(!render);
                    }}>
                    Remove from whatch list
                  </button>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div className="alt"><h3>You didn't watch any movie</h3></div>
      )}
    </>
  );
};

export default WhatchedMovies;
