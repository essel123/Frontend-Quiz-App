import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { describe, expect, test, vi } from "vitest";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    const handleClick = vi.fn();
    render(<Button buttonText="Click Me" onclick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  test("calls onclick function when clicked", () => {
    const handleClick = vi.fn();
    render(<Button buttonText="Click Me" onclick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with custom class", () => {
    const handleClick = vi.fn();
    render(<Button buttonText="Click Me" onclick={handleClick} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("btn");
  });
});
