import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("renders the Header and Sidebar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if Header and Sidebar are rendered
    expect(screen.getByTitle("header")).toBeInTheDocument();
    expect(screen.getByTitle("sidebar")).toBeInTheDocument();
  });

  test("renders Dashboard on default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Check for Dashboard content
    expect(screen.getByText(/Services Overview/i)).toBeInTheDocument();
  });

  test("renders Security Dashboard on /security route", () => {
    render(
      <MemoryRouter initialEntries={["/security"]}>
        <App />
      </MemoryRouter>
    );

    // Check for Security Dashboard content
    expect(screen.getByText(/Security Dashboard/i)).toBeInTheDocument();
  });
});
