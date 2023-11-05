import { render, screen, cleanup } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

afterEach(cleanup);

describe("Correct mounting", () => {
  it("mounts correctly comment area", () => {
    render(<CommentArea />);
    const commentArea = screen.queryByTestId("comment-area");
    const commentList = screen.queryByTestId("comment-list");
    const addComment = screen.queryByTestId("add-comment");
    expect(commentArea).toBeInTheDocument();
    expect(commentList).toBeInTheDocument();
    expect(addComment).toBeInTheDocument();
  });
});
