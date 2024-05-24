import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieRatting from "../Rate/Ratting";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "50vw", objectFit: "cover" }}>
        <Card.Img
          style={{ height: "350px" }}
          variant="top"
          src={movie.posterUrl}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>

          <Button
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              bottom: "0",
            }}
            variant="primary"
          >
            trailer
          </Button>
          <MovieRatting isMovieRating={true} movieRatting={movie.rate} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
