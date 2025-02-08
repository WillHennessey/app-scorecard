import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders Dashboard link", () => {
    render(<App />);
    const linkElement = screen.getByText("Dashboard");
    expect(linkElement).toBeInTheDocument();
  });

  // Test for checking if a specific heading is rendered
  test("renders main header", () => {
    render(<App />);
    const headingElement = screen.getByText("App-Scorecard");
    expect(headingElement).toBeInTheDocument();
  });

  // Test for checking if the Monitoring button is rendered
  test("renders Monitoring button", () => {
    render(<App />);
    const buttonElement = screen.getByText("Monitoring");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for checking if the Security button is rendered
  test("renders Security button", () => {
    render(<App />);
    const buttonElement = screen.getByText("Security");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for checking if the Services Overview heading is rendered
  test("renders Services Overview heading", () => {
    render(<App />);
    const headingElement = screen.getByText("Services Overview");
    expect(headingElement).toBeInTheDocument();
  });
});
