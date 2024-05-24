import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "../Data/data";
import { Button, Col, Container, Row } from "react-bootstrap";

const MovieDescription = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(moviesData.find((movie) => movie.id === +params.id));
  }, [params.id]);

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col sm={8}>
            <div style={{ marginTop: "100px", width: "360px" }}>
              <h1>
                description of:
                <p style={{ color: "blue" }}>{movie.title}</p>
              </h1>
              {movie.description}
            </div>
          </Col>
          <Col sm={4}>
            <iframe
              title="this is a unique title key"
              style={{
                marginTop: "100px",
                width: "450px",
                height: "300px",
              }}
              src={movie.trailer}
            />
          </Col>
        </Row>
      </Container>
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        style={{ marginLeft: "30%" }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default MovieDescription;
