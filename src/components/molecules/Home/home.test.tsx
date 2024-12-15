import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home"; // Assuming Home component is in the same file

import { describe, expect, it } from "vitest";

describe("Home component", () => {
  it("renders welcome message and list of quizzes when startquiz is false", () => {
    render(<Home />);

    const welcomeText = screen.getByText("Welcome to the");
    expect(welcomeText).toBeInTheDocument();

    const quizList = screen.getByRole("list");
    expect(quizList).toBeInTheDocument();
  });

  it("renders Quiz component on quiz selection", () => {
    render(<Home />);

    const quizListItem = screen.getAllByRole("listitem")[0];
    fireEvent.click(quizListItem);

    // Expect Quiz component to be rendered
    expect(screen.getByTestId("quiz")).toBeInTheDocument();
  });
});
