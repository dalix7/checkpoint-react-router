import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import NavBar from "./components/NavBar/NavBar";

const home = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </div>
  );
};

export default home;
