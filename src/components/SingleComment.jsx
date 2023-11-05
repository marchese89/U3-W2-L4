import { ListGroup, Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
const SingleComment = ({ comment, setIsLoading, setError, update }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div>
        {comment.comment} - voto: {comment.rate}
      </div>
      <Button
        variant="danger"
        onClick={async () => {
          try {
            setIsLoading(true);
            const response = await fetch(
              "https://striveschool-api.herokuapp.com/api/comments/" +
                comment._id,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGFkZmY2ZTNkZDAwMTQ5NWU0MzMiLCJpYXQiOjE2OTgzMTkwNzEsImV4cCI6MTY5OTUyODY3MX0.6OiHMcwB71-jL1waCDYllDV5ONJ4nMJocBRyTYVP518",
                },
                method: "DELETE",
              }
            );
            if (response.ok) {
              setIsLoading(false);
              setError(false);
              update();
            } else {
              setIsLoading(false);
              throw new Error("Errore di rete!");
            }
          } catch (err) {
            console.log("ERRORE", err);
            setError(true);
          }
        }}
      >
        <Trash3Fill />
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
