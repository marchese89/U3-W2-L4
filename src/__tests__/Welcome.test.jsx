import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Correct mounting", () => {
  it("mounts correctly welcome", () => {
    render(<Welcome />);
    const w = screen.queryByText(/Sottotitolo per lo shop/i);
    expect(w).toBeInTheDocument();
  });
});
