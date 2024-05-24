import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //initialisation

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");

  //updatestate

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handlePoster = (e) => {
    setPoster(e.target.value);
  };

  // Function add
  const handleAdd = (e) => {
    let newMovie = { title, description, rate, poster };
    add(newMovie);
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => handleTitle(e)}
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => handleDescription(e)}
          />
          <Form.Label>Rate</Form.Label>
          <Form.Control
            type="numbre"
            placeholder="Enter email"
            value={rate}
            onChange={(e) => handleRate(e)}
          />
          <Form.Label>Poster</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter url"
            value={poster}
            onChange={(e) => handlePoster(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
