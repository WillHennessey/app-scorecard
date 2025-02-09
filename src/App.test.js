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
  // Check if main content area has the correct className
  test("main content has correct className", () => {
    render(<App />);
    const mainContent = screen.getByRole("main");
    expect(mainContent).toHaveClass("pt-16 px-6 pb-8 flex");
  });

  // Check if Sidebar is rendered
  test("renders Sidebar", () => {
    render(<App />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  // Check if Dashboard component is rendered
  test("renders Dashboard", () => {
    render(<App />);
    const dashboardElement = screen.getByTestId("dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });

  test("renders Security button and navigates to Security Dashboard", () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>
    );

    fireEvent.click(getByText("Security"));
    const dashboardElement = screen.getByTestId("security-dashboard");
    expect(dashboardElement).toBeInTheDocument();
  });

  // Check if Header component is rendered
  test("renders Header", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });
});
