import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./Error-Message"; // Assuming ErrorMessage component is in the same file
import { describe, expect, it } from "vitest";

describe("ErrorMessage Component", () => {
  it("renders the error message correctly", () => {
    render(<ErrorMessage />);

    const errorMessageContainer = screen.getByTestId("error-message");
    expect(errorMessageContainer).toBeInTheDocument();

    const errorIcon = screen.getByRole("img") as HTMLImageElement;
    expect(errorIcon).toBeInTheDocument();

    const errorMessageText = screen.getByText("Please select an answer");
    expect(errorMessageText).toBeInTheDocument();
  });
});
