import React from "react";

import { Rate } from "antd";

const Ratting = ({ setRatting, ratting, isMovieRating, movieRatting }) => {
  const handlechange = (value) => {
    setRatting(value);
  };
  return isMovieRating ? (
    <div>
      <Rate value={movieRatting} />
    </div>
  ) : (
    <div>
      {/* <span style={{ position: "absolute", bottom: "100px" }}> */}
      <Rate onChange={handlechange} value={ratting} />
    </div>
  );
};

export default Ratting;
