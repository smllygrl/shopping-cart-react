import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// add to card should not work when 0 items
// can't have negative items
// subtotal of all items should not be negative
// subtotal of all items should be exactly that
