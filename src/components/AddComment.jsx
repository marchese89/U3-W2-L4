import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddComment = ({ selectedBook, id, update }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: "1",
    elementId: selectedBook,
  });

  useEffect(() => {
    setComment({
      ...comment,
      elementId: selectedBook,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook]);

  const sendComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
          },
          method: "POST",
          body: JSON.stringify(comment),
        }
      );
      if (response.ok) {
        setComment({
          comment: "",
          rate: "1",
          elementId: id,
        });
        update();
      }
    } catch (err) {
      console.log("ERRORE", err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    sendComment();
  };

  const handleInputChange = (name, value) => {
    setComment({ ...comment, [name]: value });
  };

  return (
    <Form onSubmit={submitHandler} data-testid="add-comment">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="recensione">Recensione</Form.Label>
        <Form.Control
          type="text"
          required
          value={comment.comment}
          id="recensione"
          onChange={(e) => handleInputChange("comment", e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="rate">Voto</Form.Label>
        <Form.Select
          onChange={(e) => handleInputChange("rate", e.target.value)}
          value={comment.rate}
          id="rate"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
