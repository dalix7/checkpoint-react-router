import React from "react";
import { FormControl } from "react-bootstrap";

const FilterName = ({ inputSearch, setInputSearch }) => {
  return (
    <div>
      <FormControl
        style={{ width: "40%" }}
        type="email"
        placeholder="name a movie"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterName;
