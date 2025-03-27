import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

describe("Dashboard Component", () => {
  test("renders dashboard title", () => {
    render(<Dashboard />);
    const titleElement = screen.getByText(/RxI Dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("displays correct number of service cards", () => {
    render(<Dashboard />);
    const cards = screen.getAllByText(/Last updated/i);
    expect(cards.length).toBe(6); // Since there are 6 services defined
  });

  test("renders service titles", () => {
    const serviceTitles = [
      "Azure Cost Management",
      "Azure Defender",
      "Azure Advisor",
      "SonarQube",
      "Rapid7",
      "Contrast Security",
    ];
    render(<Dashboard />);

    serviceTitles.forEach((title) => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
