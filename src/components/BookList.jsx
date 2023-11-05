import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = ({ genre, setGenre }) => {
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedGenre, setselectedGenre] = useState("fantasy");

  return (
    <>
      <Container className="mb-6 book-list book-list-search">
        {/* <Container className="book-list-search flex-grow-1"> */}
        <Row className="text-center d-flex justify-content-start  flex-grow-1">
          <Col className="col-4">
            <Form.Group className="mb-3">
              <Form.Label name="search-label" htmlFor="search">
                Ricerca
              </Form.Label>
              <Form.Control
                type="text"
                value={search}
                name="search"
                id="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Cerca libro"
              />
            </Form.Group>
          </Col>
          <Col className="col-4">
            <Form.Label name="search-label" htmlFor="genre">
              Seleziona genere
            </Form.Label>
            <Form.Select
              onChange={(e) => {
                const selected = e.target.value;
                setGenre(selected);
                setselectedGenre(selected);
              }}
              name="genre"
              id="genre"
              value={selectedGenre}
            >
              <option>fantasy</option>
              <option>history</option>
              <option>horror</option>
              <option>romance</option>
              <option>scifi</option>
            </Form.Select>
          </Col>
        </Row>
        {/* </Container> */}
        <Row className="gy-4">
          <Col className="col-8 left">
            <Row className="gy-4">
              {genre
                .filter((book) => {
                  return book.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((book) => {
                  return (
                    <Col xs={12} lg={4} key={book.asin}>
                      <SingleBook
                        book={book}
                        setSelectedBook={setSelectedBook}
                        selectedBook={selectedBook}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col className="col-4 right">
            <CommentArea selectedBook={selectedBook} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BookList;
