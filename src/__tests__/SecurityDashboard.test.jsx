import React from "react";
import { render, screen } from "@testing-library/react";
import SecurityDashboard from "../components/SecurityDashboard";

describe("SecurityDashboard", () => {
  test("renders Security Dashboard heading", () => {
    render(<SecurityDashboard />);
    const headingElement = screen.getByText(/Security Dashboard/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the monthly security alerts chart", () => {
    render(<SecurityDashboard />);
    const chartElement = screen.getByTestId("security-dashboard");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders service cards", () => {
    render(<SecurityDashboard />);
    const serviceElements = screen.getAllByText(
      /Rapid7|SonarQube|Azure Defender|Contrast Security/i
    );
    expect(serviceElements.length).toBeGreaterThan(0);
  });
});
