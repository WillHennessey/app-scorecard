// src/__tests__/App.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test("renders the Header and Sidebar", () => {
    expect(screen.getByTitle("header")).toBeInTheDocument();
    expect(screen.getByTitle("sidebar")).toBeInTheDocument();
  });

  test("renders Dashboard on default route", () => {
    expect(screen.getByText(/RxI Dashboard/i)).toBeInTheDocument();
  });

  test("renders Security Dashboard on /security route", () => {
    render(
      <MemoryRouter initialEntries={["/security"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Security Dashboard/i)).toBeInTheDocument();
  });

  test("should not render Security Dashboard on default route", () => {
    expect(screen.queryByText(/Security Dashboard/i)).not.toBeInTheDocument();
  });

  test("should not render Dashboard on /security route", () => {
    render(
      <MemoryRouter initialEntries={["/security"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText(/Services Overview/i)).not.toBeInTheDocument();
  });
});
