import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../books/fantasy.json";

afterEach(cleanup);

describe("Correct book selection", () => {
  it("change border on click(selection)", async () => {
    render(<BookList genre={fantasy} />);
    const allTheBooksAfterFetch = await screen.findAllByTestId("book");
    const firstBook = allTheBooksAfterFetch[0];
    fireEvent.click(firstBook);
    expect(firstBook).toHaveStyle("border: 2px solid red");
  });
  it("restore border on second click", async () => {
    render(<BookList genre={fantasy} />);
    const allTheBooksAfterFetch = await screen.findAllByTestId("book");
    const firstBook = allTheBooksAfterFetch[0];
    fireEvent.click(firstBook);
    fireEvent.click(allTheBooksAfterFetch[1]);
    expect(firstBook).not.toHaveStyle("border: 2px solid red");
  });
});
