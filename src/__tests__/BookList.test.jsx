import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../books/fantasy.json";

afterEach(cleanup);

describe("Correct rendering", () => {
  it("create cards based on book elements", async () => {
    render(<BookList genre={fantasy} />);
    const allTheBooksAfterFetch = await screen.findAllByTestId("book");
    expect(allTheBooksAfterFetch).toHaveLength(fantasy.length);
  });
});

describe("Correct books filtering", () => {
  it("filters on 'wi'", async () => {
    render(<BookList genre={fantasy} />);
    const filterInput = screen.getByPlaceholderText(/cerca libro/i);
    fireEvent.change(filterInput, { target: { value: "wi" } });
    const allTheBooksAfterInput = await screen.findAllByTestId("book");
    expect(allTheBooksAfterInput).toHaveLength(10);
  });
  it("filters on 'wit'", async () => {
    render(<BookList genre={fantasy} />);
    const filterInput = screen.getByPlaceholderText(/cerca libro/i);
    fireEvent.change(filterInput, { target: { value: "wit" } });
    const allTheBooksAfterInput = await screen.findAllByTestId("book");
    expect(allTheBooksAfterInput).toHaveLength(5);
  });
  it("filters on 'ca'", async () => {
    render(<BookList genre={fantasy} />);
    const filterInput = screen.getByPlaceholderText(/cerca libro/i);
    fireEvent.change(filterInput, { target: { value: "ca" } });
    const allTheBooksAfterInput = await screen.findAllByTestId("book");
    expect(allTheBooksAfterInput).toHaveLength(13);
  });
});

describe("Correct comment mounting", () => {
  it("not render comments on start", () => {
    render(<BookList genre={fantasy} />);
    const comments = screen.queryAllByTestId("single-comment");
    expect(comments).toHaveLength(0);
  });
  it("render comments on book click", async () => {
    render(<BookList genre={fantasy} />);
    const allTheBooksAfterFetch = await screen.findAllByTestId("book");
    const firstBook = allTheBooksAfterFetch[0];
    fireEvent.click(firstBook);
    const comments = await screen.findAllByTestId("single-comment");
    expect(comments.length).toBeGreaterThan(0);
  });
});
