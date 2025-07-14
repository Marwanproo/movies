/** @format */
// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useReducer } from "react";
import Header from "./comonants/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WhatchList from "./comonants/WhatchList";
import WhatchedMovies from "./comonants/WhatchedMovies";
function reducer(state, action) {
  switch (action.type) {
    case "AddToWhatchList":
      state = [...state, action.payload];
      return state
        .map((movie) => {
          return { ...movie, AddedToWhatchList: true };
        })
        .filter(
          (obj, index, self) =>
            index === self.findIndex((t) => t.imdbID === obj.imdbID)
        );
    case "AddToWhatchedMovies":
      state.forEach((movie) => {
        if (movie.imdbID === action.id) movie.AddedToWhatched = true;
      });
      return state;
    case "RemoveFromWhatchList":
      state.forEach((movie) => {
        if (movie.imdbID === action.id) movie.AddedToWhatchList = false;
      });
      return state
    case "RemoveFromWhatchedMovies":
      state.forEach((movie) => {
        if (movie.imdbID === action.id) movie.AddedToWhatched = false;
      });
      return state
    default:
      return state;
  }
}
function App() {
  const [moviesList, dispatch] = useReducer(reducer, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <WhatchList
              WhatchList={moviesList}
              RemoveFromWhatchList={(i) =>
                dispatch({ type: "RemoveFromWhatchList", id: i.imdbID })
              }
              AddtoWhatched={(i) =>
                dispatch({ type: "AddToWhatchedMovies", id: i.imdbID })
              }
            />
          }
        />
        <Route
          path="/Add"
          element={
            <>
              <Header
                AddMovie={(i) =>
                  dispatch({ type: "AddToWhatchList", payload: i })
                }
                WhatchList={moviesList}
              />
            </>
          }
        />
        <Route
          path="/Whatched_Movies"
          element={
            <WhatchedMovies
              RemoveFromWhatchedMovies={(i) =>
                dispatch({ type: "RemoveFromWhatchedMovies", id: i.imdbID })
              }
              WhatchList={moviesList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
