import { fireEvent, render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../books/fantasy.json";
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
