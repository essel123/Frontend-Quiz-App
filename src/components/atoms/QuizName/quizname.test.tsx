import { render, screen } from "@testing-library/react";
import QuizName from "./Quiz-Name"; // Assuming QuizName component is in the same file
import { describe, expect, it } from "vitest";

describe("QuizName Component", () => {
  it("renders correctly with props", () => {
    const quizIcon = "/path/to/icon.svg";
    const quizTitle = "React Quiz";

    render(<QuizName quizicon={quizIcon} quiztitle={quizTitle} />);

    const quizTypeContainer = screen.getByTestId("quiztype");
    expect(quizTypeContainer).toBeInTheDocument();

    const quizIconElement = screen.getByRole("img") as HTMLImageElement;
    expect(quizIconElement.src).toBe(quizIcon);

    const quizTitleElement = screen.getByText(quizTitle);
    expect(quizTitleElement).toBeInTheDocument();
  });
});
