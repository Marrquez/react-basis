import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders correct heading", () => {
    render(<Navbar />);
    expect(screen.getByRole("heading").textContent).toMatch(/Hello world from Navbar/i);
  });

  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<Navbar />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("paragraph").textContent).toMatch(/Radical Rhinos/i);
  });

//   it("should call the onClick function when clicked", async () => {
//     const onClick = vi.fn();
//     const user = userEvent.setup()
    
//     render(<Navbar />);
//     const button = screen.getByRole("button", { name: "Click Me" });

//     await user.click(button);

//     expect(onClick).toHaveBeenCalled();
//   });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<Navbar />);

    expect(onClick).not.toHaveBeenCalled();
  });
});