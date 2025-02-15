import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("<App />", () => {
  test("renders Dashboard link", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const linkElement = screen.getByText("Dashboard");
    expect(linkElement).toBeInTheDocument();
  });

  // Test for checking if a specific heading is rendered
  test("renders main header", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText("App-Scorecard");
    expect(headingElement).toBeInTheDocument();
  });

  // Test for checking if the Monitoring button is rendered
  test("renders Monitoring button", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByText("Monitoring");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for checking if the Security button is rendered
  test("renders Security button", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const buttonElement = screen.getByText("Security");
    expect(buttonElement).toBeInTheDocument();
  });

  // Test for checking if the Services Overview heading is rendered
  test("renders Services Overview heading", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const headingElement = screen.getByText("Services Overview");
    expect(headingElement).toBeInTheDocument();
  });

  // Check if main content area has the correct className
  test("main content has correct className", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const mainContent = screen.getByRole("main");
    expect(mainContent).toHaveClass("pt-16 px-6 pb-8 flex");
  });

  // Check if Sidebar is rendered
  test("renders Sidebar", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  // Check if Dashboard component is rendered
  test("renders Dashboard", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const dashboardElement = screen.getByTitle("dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });

  test("renders Security button and navigates to Security Dashboard", async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });

    fireEvent.click(getByText("Security"));
    const dashboardElement = screen.getByTestId("security-dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });

  // Check if Header component is rendered
  test("renders Header", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const headerElement = screen.getByTitle("header");
    expect(headerElement).toBeInTheDocument();
  });
});
