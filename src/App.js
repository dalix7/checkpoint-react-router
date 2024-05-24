import "./App.css";
import React, { useState } from "react";

import { moviesData } from "./components/Data/data";
import MovieList from "./components/movieList/movieList";
import AddMovie from "./components/AddMovie/AddMovie";
import FilterName from "./components/FilterName/FilterName";
import FilterRates from "./components/Rate/Ratting";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const [ratting, setRatting] = useState(1);

  //  handleMovie

  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>movies app</h1>
      <h2>movieList</h2>

      <FilterName inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <FilterRates
        isMovieRating={false}
        ratting={ratting}
        setRatting={setRatting}
      />

      <AddMovie add={add} />
      <br />

      <MovieList movies={movies} inputSearch={inputSearch} ratting={ratting} />
    </div>
  );
}

export default App;
