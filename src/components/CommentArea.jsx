import CommentList from "./CommentsList";
import AddComment from "./AddComment";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = ({ selectedBook }) => {
  const [listOfComments, setlistOfComments] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedBook !== null) {
      getComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBook]);

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + selectedBook,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setlistOfComments(data);
      }
    } catch (err) {
      console.log("ERRORE", err);
      setError(true);
    }
  };
  return (
    <div className="comment-area" data-testid="comment-area">
      {error && <Error />}
      <CommentList
        listOfComments={listOfComments}
        update={getComments}
        setError={setError}
      />
      <AddComment selectedBook={selectedBook} update={getComments} />
    </div>
  );
};

export default CommentArea;
