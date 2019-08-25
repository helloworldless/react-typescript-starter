import * as React from "react";
import { render, getByTestId } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App message="Aloha!" />);
});

it("displays the provided message", () => {
  const aloha = "Aloha!";
  const { container } = render(<App message={aloha} />);
  const messageElement = getByTestId(container, "message");
  expect(messageElement.innerHTML).toBe(aloha);
});
