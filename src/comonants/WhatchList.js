/** @format */
import React, { useState } from "react";
import "../App.css";
import HeaderBar from "./HeaderBar";
const WhatchList = (props) => {
  const [render, setRender] = useState(false);
  return (
    <>
      <HeaderBar />
      {props.WhatchList.length > 0 ? (
        <div className="movies_cart">
          {props.WhatchList.map((item) => {
            return (
              item.AddedToWhatchList && (
                <div className="movie" key={item.imdbID}>
                  <div className="img_container">
                    <img src={item.Poster} alt={item.Title} />
                  </div>
                  <div>{item.Title}</div>
                  <button
                    onClick={() => {
                      props.RemoveFromWhatchList(item);
                      setRender(!render);
                    }}>
                    Remove from whatch list
                  </button>
                  <button
                    onClick={() => {
                      props.AddtoWhatched(item);
                      setRender(!render);
                    }}>
                    Add to Whatched movies
                  </button>
                </div>
              )
            );
          })}
        </div>
      ) : (
        <div className="alt">
          <h3>You didn't add any movie</h3>
        </div>
      )}
    </>
  );
};

export default WhatchList;
